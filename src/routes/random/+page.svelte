<script lang="ts">
    export let data;
    
    const {
        quotes,
        images,
    } = data;

    $: photoIndex = 0;
    $: quoteIndex = 0;

    $: recentPhotoIndex = 0;
    $: recentQuoteIndex = 0;

    const generateNewImage = () => {
        const newPhotoIndex = Math.floor(Math.random() * images.length);
        const newQuoteIndex = Math.floor(Math.random() * quotes.length);

        if (newPhotoIndex === recentPhotoIndex || newQuoteIndex === recentQuoteIndex) {
            generateNewImage();
        } else {
            photoIndex = newPhotoIndex;
            quoteIndex = newQuoteIndex;

            recentPhotoIndex = photoIndex;
            recentQuoteIndex = quoteIndex;
        };
    };
</script>
<div
    class="imgs flex flex-col w-screen h-screen items-center justify-center text-white hover:cursor-pointer"
    on:click={generateNewImage}
>
    <span class="quote italic mb-8">"{quotes[quoteIndex]}"</span>
    <div class="image-container flex flex-col items-center justify-center">
        <img
            src={images[photoIndex]}
            alt='"{quotes[quoteIndex]}"'
            class="image rounded-md flex items-center justify-center font-bold italic"
        />
    </div>
</div>

<style lang="postcss">
    .imgs {
        background-color: rgb(1, 4, 8);
    }
    .image {
        max-width: 350px;
        background-color: rgb(51, 53, 65);
    }
    .image-container {
        height: 600px;
        max-height: 700px;
    }
    @media (max-width: 380px) {
        .image {
           @apply w-11/12;
        }
        .quote {
            @apply px-4 text-center;
        }
    }
</style>