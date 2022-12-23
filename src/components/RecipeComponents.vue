<template>
    <article>
        <div>
            <h3>
                <a href="#">
                    Frites aux frites
                </a>
            </h3>
            <div>
                Par l'homme frite
            </div>
        </div>
    </article>
</template>

<style scoped>
article {
    background: url('https://picsum.photos/300/200') center;
    background-size: cover;
    width: 90%;
    margin: 1em auto;
    box-shadow: 0 0 5px rgb(118, 118, 118);
    border-radius: 0.5em;
    position: relative;
    aspect-ratio: 4/3;
}

article>div {
    background-color: #f0f4ee;
    padding: 1em;
    text-align: left;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

article>div>h3 {
    font-size: 1.2em;
    font-weight: bold;
}

article>div>div {
    margin-top: 0.5em;
}
</style>