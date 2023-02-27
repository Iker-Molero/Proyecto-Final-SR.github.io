class Vehiculo {
    constructor() {
        this.posicion = createVector(random(width), random(height));
        this.velocidad = p5.Vector.random2D();
        this.velocidad.setMag(random(2, 4));
        this.aceleracion = createVector();
        this.fuerzaMaxima = .2;
        this.velocidadMaxima = 5;
        this.radio = 3;
        let aleatorio = random(130, 20);
        this.color = color(255, aleatorio, (aleatorio - 30));
        console.log(this.color);
    }

    screenWrapping() {
        if (this.posicion.x > width) {
            this.posicion.x = 0;
        } else if (this.posicion.x < 0) {
            this.posicion.x = width;
        }

        if (this.posicion.y > height) {
            this.posicion.y = 0;
        } else if (this.posicion.y < 0) {
            this.posicion.y = height;
        }
    }

    update() {
        this.posicion.add(this.velocidad);
        this.velocidad.add(this.aceleracion);
        this.velocidad.limit(this.velocidadMaxima);
        this.aceleracion.mult(0);
    }

    show() {
        let triangulo = this.velocidad.heading() + radians(90);
        fill(this.color);
        stroke(this.color);
        push();
        translate(this.posicion.x, this.posicion.y);
        rotate(triangulo);
        beginShape();
        vertex(0, -this.radio * 2);
        vertex(-this.radio, this.radio * 2);
        vertex(this.radio, this.radio * 2);
        endShape(CLOSE);
        pop();
    }

    alinear(vehiculos) {
        let media = createVector();
        let rango = 50;
        let total = 0;
        for (let other of vehiculos) {
            let distancia = dist(
                this.posicion.x, 
                this.posicion.y,
                other.posicion.x,
                other.posicion.y
            );
            if (other != this && distancia < rango) {
                media.add(other.velocidad);
                total++;
            }
        }
        if (total > 0) {
            media.div(total);
            media.setMag(this.velocidadMaxima);
            media.sub(this.velocidad);
            media.limit(this.fuerzaMaxima);
        }
        this.aceleracion.add(media);
    }

    cohesion(vehiculos) {
        let media = createVector();
        let rango = 50;
        let total = 0;
        for (let other of vehiculos) {
            let distancia = dist(
                this.posicion.x, 
                this.posicion.y,
                other.posicion.x,
                other.posicion.y
            );
            if (other != this && distancia < rango) {
                media.add(other.posicion);
                total++;
            }
        }
        if (total > 0) {
            media.div(total);
            media.sub(this.posicion);
            media.setMag(this.velocidadMaxima);
            media.sub(this.velocidad);
            media.limit(this.fuerzaMaxima);
        }
        this.aceleracion.add(media);
    }

    separacion(vehiculos) {
        let media = createVector();
        let rango = 50;
        let total = 0;
        for (let other of vehiculos) {
            let distancia = dist(
                this.posicion.x, 
                this.posicion.y,
                other.posicion.x,
                other.posicion.y
            );
            if (other != this && distancia < rango) {
                let diferencia = p5.Vector.sub(this.posicion, other.posicion);
                diferencia.div(distancia);
                media.add(diferencia);
                total++;
            }
        }
        if (total > 0) {
            media.div(total);
            media.setMag(this.velocidadMaxima);
            media.sub(this.velocidad);
            media.limit(this.fuerzaMaxima);
        }
        this.aceleracion.add(media);
    }
}