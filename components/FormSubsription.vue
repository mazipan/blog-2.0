<template>
  <div>
    <h3>📧 Get the newsletter</h3>
    <form
      class="form"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/success-subscribed">
      <input
        type="hidden"
        name="form-name"
        value="contact">
      <label for="form-email">Subscribe here to get the latest article by email.</label>
      <div class="control">
        <input
          id="form-email"
          type="email"
          name="email"
          class="input"
          required
          placeholder="Your email address">
        <button
          class="btn"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormSubscription'
}
</script>

<style lang="scss">
.form{
  .control{
    display: flex;
    margin-top: 1em;
  }
  .input{
    border: 0;
    outline: 0;
    background: #fff;
    font-size: 16px;
    line-height: 18px;
    height: 40px;
    vertical-align: middle;
    width: 250px;
    padding: .5em 1em;
    border-top-left-radius: .25em;
    border-bottom-left-radius: .25em;
  }
  .btn{
    height: 40px;
    border: 0;
    outline: 0;
    text-transform: none;
    font-size: 14px;
    line-height: 18px;
    background: var(--textLink);
    color: var(--textNormal);
    width: 100px;
    border-top-right-radius: .25em;
    border-bottom-right-radius: .25em;
  }
}
</style>
