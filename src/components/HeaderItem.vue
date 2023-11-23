<template>
  <header>
    <div class="container">
      <div class="logo">LOGO</div>
      <div class="nav-items">
        <div class="nav-item" href="#">Home</div>
        <div class="nav-item" href="#">
          <i class="material-icons">login</i>Sign In
        </div>
        <div class="nav-item" href="#">Sign Out</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 544px) {
  .container {
    max-width: 576px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 940px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
