class Ghost {
    constructor(x, y, width, height, speed, imageX, imageY, imageWidth, imageHeight, range)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
        this.imageX = imageX;
        this.imageY = imageY;
        this.imageHeight = imageHeight;
        this.imageWidth = imageWidth;
        this.range = range;
        this.randomTargetIndex = parseInt(Math.random() *4);
        this.target = randomTargetsForGhosts[this.randomTargetIndex];
        setInterval(()=>{
            this.changeRandomDirection();
        }, 10000);

    }
}