<template>
  <div>
    <footer class="footer">
      <div class="container">
        <span class=""> {{ currentYear}} </span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data(){
    return {
      currentyear: new Date().getFullYear(),
    }
  }
}
</script>
<style>
  .footer_text{
    font-weight: bold;
    font-style: italic;
  }
</style>