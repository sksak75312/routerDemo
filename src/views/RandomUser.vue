<template>
  <div class="container pt-2">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">
      <div class="col" v-for="user in userData" :key="user.uuid">
        <div class="card">
          <img :src="user.avatar" class="card-img-top object-fit-cover" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-bold">{{ `${user.first_name} ${user.last_name}` }}</h5>
            <button href="#" class="btn btn-primary w-100" ref="userModal">查看詳細資料</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
      userModal: ''
    }
  },

  mounted() {
    const api = import.meta.env.VITE_RANDOMUSER
    this.$http
      .get(api)
      .then((res) => {
        this.userData = res.data
        console.log(this.userData)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
