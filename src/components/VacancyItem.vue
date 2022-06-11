<template>
  <div class="vacancy-item">
    <div class="vacancy-info">
      <h3 class="job-title">{{ vacancy.title }}</h3>
      <span class="vacancy-location">{{ vacancy.location }}</span>
    </div>
    <a href="#" class="apply-lnk">Apply</a>
  </div>
</template>

<script>
export default {
  props: ["vacancy"],
};
</script>

<style>
.vacancy-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 64px 35px 40px;
  background-color: #f2f5f9;
}

.vacancy-item:not(:last-child) {
  margin-bottom: 24px;
}

.vacancy-info {
  display: flex;
  flex-direction: column;
}

.job-title {
  font-size: 24px;
  line-height: 28px;
  color: #495567;
  letter-spacing: -1px;
}

.vacancy-location {
  font-size: 15px;
  line-height: 25px;
  color: #495567;
}

.apply-lnk {
  padding: 14px 67px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  border: 3px solid transparent;
  background-color: #fcb72b;
  transition: all 0.3 s ease;
  text-decoration: none;
}

.apply-lnk:hover {
  border-color: #fcb72b;
  color: #fcb72b;
  background-color: transparent;
}

@media screen and (max-width: 450px) {
  .vacancy-item {
    padding: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .job-title {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 4px;
    text-align: center;
  }

  .vacancy-location {
    text-align: center;
    margin-bottom: 16px;
  }

  .vacancy-item:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
