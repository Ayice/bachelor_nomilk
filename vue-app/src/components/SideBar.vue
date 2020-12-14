<template>
  <div class="sidebar-wrapper flex flex-col h-screen align-items-center py-5 bg-gray-200">
    <!-- wrapper -->

    <div class="flex flex-col h-screen justify-between w-4/5">
      <!-- logo og user+role container -->

        <div class="flex flex-col">
             <!-- user container -->
            <div>
                <img
            class="mb-6 w-full"
            src="http://bachelor.local/wp-content/uploads/2020/12/Group-915.svg"
            alt="NoMilk Logo"><!-- logo image her -->
            </div>
        
            <div class="flex items-start">
                <img
                class="rounded-full h-12 w-12"
                src="http://bachelor.local/wp-content/uploads/2020/12/Mathias-til-jobside.jpg"
                alt="Mathias Vorret"><!-- user image her-->
                <div class="flex flex-col  pl-2">
                    <p class="text-lg font-semibold">User name</p> <!-- user name -->
                    <p class="text-sm font-normal">User role</p> <!-- user role -->
                </div>
            
            </div>
        </div>
    
        <div class="mt-10">
            <!-- list container -->
            <div class="flex flex-col align-items-start">
                <!-- menu list -->
                <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent active:text-white-200 active:bg-none transition duration-300 ease-in-out">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Indsæt nyt domæne
                </button><!-- list items -->
                <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent focus:outline-none focus:border-none active:bg-none">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Slet domæne
                </button>
            </div>
        </div>

        <div class="flex align-items-start">
        <!-- logout container -->
        <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent focus:outline-none focus:border-none active:bg-none">
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Log ud
        </button>
        </div>
    </div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
    button {
        display: flex;
    }
    button:active, button:focus {
        outline: none;
    }
    .sidebar-wrapper {
        user-select: none;
    }
</style>
