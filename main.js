// script.js
document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');
    let isJumping = false;

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let jumpHeight = 0;
        let upInterval = setInterval(() => {
            if (jumpHeight >= 150) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (jumpHeight <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                    jumpHeight -= 5;
                    player.style.bottom = jumpHeight + 'px';
                }, 20);
            }
            jumpHeight += 5;
            player.style.bottom = jumpHeight + 'px';
        }, 20);
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            jump();
        }
    });

    function checkCollision() {
        const playerRect = player.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.right > obstacleRect.left &&
            playerRect.left < obstacleRect.right &&
            playerRect.bottom > obstacleRect.top
        ) {
            alert('Game Over');
            clearInterval(collisionInterval);
            location.reload();
        }
    }

    let collisionInterval = setInterval(checkCollision, 10);
});
