<template>
  <div class="flex flex-col w-full">
    <label :for="name" class="capitalize" :class="{ 'text-red-500': error }">{{
      name
    }}</label>
    <input
      :id="name"
      :name="name"
      v-bind:="$attrs"
      :value="modelValue"
      :class="{ 'border-red-500': error }"
      @input="$emit('update:modelValue', $event.target.value)"
      class="bg-slate-50 rounded-sm w-full"
    />
    <span class="text-sm mt-1 text-red-600" v-if="helperText">{{
      helperText
    }}</span>
  </div>
</template>

<script>
export default { inheritAttrs: false };
</script>

<script setup>
import { defineProps } from "vue";

defineProps({
  name: { type: String, default: "", required: true },
  modelValue: { type: String, required: true },
  helperText: { type: String, default: "" },
  error: { type: Boolean, default: false },
});
</script>
