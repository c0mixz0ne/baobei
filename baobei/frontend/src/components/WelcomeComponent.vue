<template>
  <section class="welcome">
    <h1>Центр иностранных языков и детского развития <span>Baobei</span></h1>
    <h2>
      Ребенок - это как растущее растение, которое нуждается в уходе, внимании и развитии, чтобы
      стать сильным и прекрасным
    </h2>
  </section>
</template>
<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
  background-image: linear-gradient(rgba(44, 55, 69, 0.8), rgba(44, 55, 69, 0.6)),
    url(../assets/images/background1.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 30px;
  h1 {
    color: var(--white);
    text-align: center;
    font-size: 52px;
    span {
      display: block;
    }
  }
  h2 {
    color: var(--white);
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
    margin-top: 30px;
  }
}

@include breakpoint(xs){
  .welcome{
    height: calc(100vh - 60px);
  }
}
</style>
