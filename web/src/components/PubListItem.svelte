<script>
    import { fade } from 'svelte/transition'
    export let authorURL;
    export let imageURL;
    export let name;
</script>

<div role="listitem" class="cms-item fade-in-2nd w-dyn-item">
    <a href={authorURL} class="">
        <div class="" style="background-color:#e9e1da">
            <div class="relative overflow-hidden w-full h-64">
                <img in:fade={{delay:400}} 
                    style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.05, 1.05, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" 
                    src={imageURL} alt={name} 
                    class="my-auto px-4 object-contain object-center h-full w-full "
                >
            </div>
            <!-- <div data-w-id="f11e2059-6fce-67da-f0d2-07ee082cf30c" style="display:block" class="image-cover-shape"></div> -->
        </div>
        
    </a>
</div>