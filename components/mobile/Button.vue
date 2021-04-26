<template>
  <div
    :class="{
      button: type === 'positive',
      'button-blue': type === 'positive' && theme === 'blue',
      'button-purple': type === 'positive' && theme === 'purple',
      'button-grey': type === 'positive' && theme === 'grey',
      disabled: disabled,
      link: type === 'link',
      href: type === 'link',
      phone: type === 'contact',
    }"
    @click="!disabled && onClick()"
  >
    <a v-if="!!href" class="href" :href="href" :target="target">
      <slot></slot>
    </a>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'positive',
    },
    theme: {
      type: String,
      default: 'blue',
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: '_self',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="stylus" scoped>
.button {
  display: inline-block;
  width: 80px;
  height: 32px;
  border-radius: 30.5px;
  cursor: pointer;
  color: white;
  font-size: 12px;
  line-height: 32px;
  text-align: center;
  font-weight: bold;

  .href {
    display: block;
    width: 100%;
    height: 100%;
    color: white;
  }
}

.button-blue {
  background: color-blue-1;

  &:hover {
    background: color-blue-2;
  }

  &:active, &:focus {
    background: color-blue-3;
  }
}

.button-purple {
  background: color-blue-5;

  &:hover {
    background: color-blue-6;
  }

  &:active, &:focus {
    background: color-blue-4;
  }
}

.button-grey {
  background: color-blue-9;
  color: color-blue-1;

  &:hover {
    background: color-blue-10;
  }

  &:active, &:focus {
    background: color-blue-7;
  }

  .href {
    color: color-blue-1;
  }
}

.link {
  display: inline;
  font-size: 16px;
  cursor: pointer;
}

.href {
  color: color-blue-1;
}

.disabled {
  background: color-blue-1;
  color: white;
  cursor: not-allowed;

  &:hover, &:active {
    background: color-blue-2;
    color: white;
    cursor: pointer;
  }
}

.homebottom {
  height: 40px;
}

.phone {
  float: left;
  width: 50%;
  height: 100%;
  line-height: 60px;
  font-size: 16px;
  text-align: center;
  background: #3784FF;
  box-shadow: 0px 14px 20px 0px rgba(14, 20, 33, 0.05);
  border-radius: 0;

  >a {
    color: white;
  }
}
</style>
