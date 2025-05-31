<template>
  <div class="home d-flex flex-column justify-content-between">
    <div class="header"></div>
    <div class="footer d-flex align-items-center justify-content-end">
      <img src="@icons/shutdown.png" alt="" width="28px" class="me-1">
      Turn Off Computer
    </div>
  </div>
</template>

<style scoped>
  .home {
    border-radius: 10px 10px 1px 1px;
    background: white;
    box-shadow: 2px 2px 4px #00000079;
    border: 2px solid #002DD1;
    border-top: none;
  }

  .header {
    height: 70px;
    width: 100%;
    background: #4791ED;
    background: linear-gradient(0deg, rgba(71, 145, 237, 1) 0%, rgba(33, 98, 222, 1) 42%, rgba(28, 84, 214, 1) 61%, rgba(35, 93, 218, 1) 75%, rgba(52, 113, 226, 1) 84%, rgba(107, 171, 255, 1) 94%, rgba(52, 113, 226, 1) 99%);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    color: white;
  }

  .footer {
    height: 50px;
    width: 100%;
    background: #0E5ECA;
    background: linear-gradient(0deg, rgba(14, 94, 202, 1) 0%, rgba(63, 140, 231, 1) 100%);
    color: white;
    font-family: Tahoma, sans-serif;
    font-size: 12px;
    text-shadow: 0.5px 2px 2px rgba(0, 0, 0, 0.279);
    padding-right: 8px;
  }
</style>

