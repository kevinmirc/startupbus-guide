<template>
  <div>
    <div class="card z-depth-1" v-for="sponsor in sponsors" :key="sponsor.id">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="sponsor.fields.Image | thumbnail">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"></span>
        <span class="card-title activator grey-text text-darken-4">{{ sponsor.fields.Name }}<i class="material-icons right">more_vert</i></span>
        <!-- <p><a :href="sponsor.fields['Website Url']">{{ prettyUrl(sponsor.fields['Website Url']) }}</a></p> -->
      </div>
      <div class="card-reveal">
        <div class="row">
          <span class="card-title grey-text text-darken-4">
            <p>
              {{ sponsor.fields.Name }} <i class="material-icons right">close</i>
            </p>
          </span>
        </div>
        <div class="row">
          <ul class="collection with-header">
            <li class="collection-header">
              <strong>Social</strong>
            </li>
            <li class="collection-item">
              <div>
                Twitter: {{ sponsor.fields['Twitter Handle'] }}
                <a class="secondary-content" target="_blank" :href="sponsor.fields['Twitter URL']">
                  <i class="material-icons">open_in_new</i>
                </a>
              </div>
            </li>
            <li class="collection-item">
              <div>
                Instagram: {{ sponsor.fields['Instagram Handle'] }}
                <a class="secondary-content" target="_blank" :href="sponsor.fields['Instagram URL']">
                  <i class="material-icons">open_in_new</i>
                </a>
              </div>
            </li>
            <li class="collection-item">
              <div>
                Facebook: {{ sponsor.fields['Facebook Page Name'] }}
                <a class="secondary-content" target="_blank" :href="sponsor.fields['Facebook URL']">
                  <i class="material-icons">open_in_new</i>
                </a>
              </div>
            </li>
          </ul>
          <ul class="collection with-header">
            <li class="collection-header">
              <strong>Details</strong>
            </li>
            <li class="collection-item">
              <div>
                {{ prettyUrl(sponsor.fields['Website Url']) }}
                <a class="secondary-content" target="_blank" :href="sponsor.fields['Website Url']">
                  <i class="material-icons">open_in_new</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sponsors: { type: Array, required: true },
  },
  methods: {
    prettyUrl(url) {
      if (!url || typeof url !== 'string') {
        return null;
      }

      return url.replace('https://', '').replace('http://', '');
    },
  }
};
</script>
<style lang="css">

</style>
