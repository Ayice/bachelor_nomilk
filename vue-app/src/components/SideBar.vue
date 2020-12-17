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
            src="http://bachelor.local/wp-content/uploads/2020/12/nomilk.svg"
            alt="NoMilk Logo"><!-- logo image her -->
        </div>

        <div class="flex items-start">
          <img
            class="rounded-full h-12 w-12"
            src="http://bachelor.local/wp-content/uploads/2020/12/Mathias-til-jobside.jpg"
            alt="Mathias Vorret"><!-- user image her-->
          <div class="flex flex-col  pl-2">
            <p class="text-lg font-semibold">
              User name
            </p> <!-- user name -->
            <p class="text-sm font-normal">
              User role
            </p> <!-- user role -->
          </div>
        </div>
      </div>

      <div class="mt-10">
        <form
          id="newPostForm"
          @submit.prevent="createNewPost">
          <p class="text-lg font-medium">
            Create New Website
          </p>

          <div class="relative mt-3">
            <input
              id="4451"
              v-model="title"
              required
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              type="text"
              name="title">
            <label
              :class="[{ 'filled-input': title }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="title">Title</label>
          </div>

          <div class="relative mt-3">
            <input
              id="321"
              v-model="googleAnalyticsApiKey"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[google_analytics_api_key]">
            <label
              :class="[{ 'filled-input': googleAnalyticsApiKey }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Google analytics api Key</label>
          </div>

          <div class="relative mt-3">
            <input
              id="234"
              v-model="domain"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[domain]">
            <label
              :class="[{ 'filled-input': domain }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Domain</label>
          </div>

          <p class="mt-3 text-sm font-medium">
            SFTP Data:
          </p>

          <div class="relative mt-3">
            <input
              id="18"
              v-model="serverName"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][host]">
            <label
              :class="[{ 'filled-input': serverName }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Server Name</label>
          </div>

          <div class="relative mt-3">
            <input
              id="19"
              v-model="host"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][name]">
            <label
              :class="[{ 'filled-input': host }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Host</label>
          </div>

          <div class="relative mt-3">
            <input
              id="17"
              v-model="protocol"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][protocol]">
            <label
              :class="[{ 'filled-input': protocol }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Protocol</label>
          </div>

          <div class="relative mt-3">
            <input
              id="16"
              v-model="port"
              required
              type="number"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][port]">
            <label
              :class="[{ 'filled-input': port }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Port</label>
          </div>

          <div class="relative mt-3">
            <input
              id="15"
              v-model="username"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][username]">
            <label
              :class="[{ 'filled-input': username }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="username">Username</label>
          </div>

          <div class="relative mt-3">
            <input
              id="14"
              v-model="password"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][password]">
            <label
              :class="[{ 'filled-input': password }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Password</label>
          </div>

          <div class="relative mt-3">
            <input
              id="13"
              v-model="remotePath"
              required
              type="text"
              class="search  w-full border-0 h-full rounded-none text-xs focus:outline-none bg-transparent"
              name="fields[sftp_data][remotePath]">
            <label
              :class="[{ 'filled-input': remotePath }, 'text-gray-400', 'z-10', 'absolute', 'pointer-events-none', 'left-2', 'search-label', 'text-xs']"
              for="">Remote Path</label>
          </div>

          <div class="relative mt-3">
            <input
              id="12"
              v-model="uploadOnSave"
              required
              type="checkbox"
              name="fields[sftp_data][uploadonsave]">
            <label
              class="text-md"
              for="12">Upload on Save</label>
          </div>

          <button
            class="w-full shadow mt-2 justify-center font-bold p-2 text-white bg-blue-500 hover:bg-blue-600 active:outline-none active:bg-blue-500 focus:bg-blue-500"
            type="submit">
            Submit
          </button>
        </form>
      </div>

      <div
        v-if="sdfasdfs = false"
        class="mt-10">
        <!-- list container -->
        <div class="flex flex-col align-items-start">
          <!-- menu list -->
          <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent active:text-white-200 active:bg-none transition duration-300 ease-in-out focus:">
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>

            Indsæt nyt domæne
          </button><!-- list items -->

          <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent focus:outline-none focus:border-none active:bg-none">
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>

            Slet domæne
          </button>
        </div>
      </div>

      <div class="flex align-items-start">
        <!-- logout container -->
        <button class="w-full hover:bg-transparent hover:text-indigo-600 focus:bg-transparent focus:outline-none focus:border-none active:bg-none">
          <svg
            class="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Log ud
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { postNewWebsite } from '../utils/api';

export default {
  data() {
    return {
      // eslint-disable-next-line
      wpData: wpData,
      title: '',
      googleAnalyticsApiKey: '',
      domain: '',
      host: '',
      serverName: '',
      protocol: '',
      port: 21,
      username: '',
      password: '',
      remotePath: '',
      uploadOnSave: true
    };
  },
  methods: {
    createNewPost() {
      const postData = {
        title: this.title,
        status: 'publish',
        fields: {
          google_analytics_api_key: this.googleAnalyticsApiKey,
          domain: this.domain,
          sftp_data: {
            name: this.serverName,
            host: this.host,
            protocol: this.protocol,
            port: this.port,
            username: this.username,
            password: this.password,
            remotePath: this.remotePath,
            upload_on_save: this.uploadOnSave
          }
        }
      };

      postNewWebsite(postData, this.wpData)
        .then(res => {
          console.log(res);

          this.posts.splice(0, 0, res);
        });
    }
  }
};
</script>

<style scoped>
    button {
        outline: none;
        display: flex;
    }

    button:active, button:focus {
        outline: none;
    }

    .sidebar-wrapper {
        user-select: none;
    }

  input[type="text"],
  input[type="number"] {
    padding: .5rem;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #000;
    position: relative;
  }

  input[type="text"]:focus ~ label,
  input[type="number"]:focus ~ label {
    bottom: 120%;
    transform: translateY(100%);
    font-size: 60%;
  }

  .search-label {
    color: #000;
    bottom: 50%;
    transform: translateY(50%);
    transition: .3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .filled-input {
    bottom: 120%;
    transform: translateY(100%);
    font-size: 60%;
  }
</style>
