
<template>
    <div class="recipe">

        <div class="mb-3">
  <label :for="forLabel" class="form-label">{{ nom }}</label>
  <textarea class="form-control" :placeholder="placeholder" :id="id" rows="3" style="background-color: #f0f4ee;"></textarea>
</div>
    </div>
</template>
  

<script>
export default {
  name: 'Textarea',
  props: {
    id: String,
    forLabel: String,
    nom: String,
    placeholder : String
  }
}
</script>

<style>
label {
  font-weight: bold;
}

textarea {
  background-color: #f0f4ee;
}
</style>