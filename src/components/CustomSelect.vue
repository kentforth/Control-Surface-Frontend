<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{open: open}" @click="open = !open">{{ selected }}</div>
    <div class="items" :class="{selectHide: !open}">
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="openBox(option)"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"CustomSelect",
    props: {
      options: {
        type: Array,
        required: true
      },
      tabindex: {
        type: Number,
        required: false,
        default: 0
      }
    },
    data() {
      return {
        selected: this.options.length > 0 ? this.options[0] : null,
        open: false
      };
    },
    methods: {
      openBox(option) {
        this.selected = option;
        this.open = false;
        this.$emit('input', option);
        console.log(this.selected)

      }
    },
    mounted() {
      this.$emit("input", this.selected);
    }
  };
</script>

<style scoped>
  .custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
  }

  .selected {
    background-color: var(--dark);
    border-radius: 6px;
    color: #ffffff;
    padding-left: 8px;
    cursor: pointer;
    user-select: none;
    font-size: 1.5rem;
    -webkit-box-shadow: 0px 4px 11px -3px #191919;
    box-shadow: 0px 4px 11px -3px #191919;
  }

  .selected.open {
    border-radius: 6px 6px 0 0;
  }

  .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 10px;
    width: 0;
    height: 0;
    border-color: #fff transparent transparent transparent;
  }

  .items {
    color: #ffffff;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    position: absolute;
    background-color: var(--dark);
    bottom: 3.1em;
    left: 0;
    right: 0;
  }

  .item {
    color: var(--light);
    padding-left: 8px;
    cursor: pointer;
    user-select: none;
    font-size: 1.5rem;
  }

  .item:hover {
    background-color: var(--accent);
    color: var(--dark);
  }

  .selectHide {
    display: none;
  }
</style>
