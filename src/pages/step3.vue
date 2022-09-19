<template>
  <div id="step3">
    <ProgressBar>
      <div class="step done">
        <span class="step-num">3</span>
        <div class="bar"></div>
        <span class="step-text">14分钟内付款</span>
      </div>
    </ProgressBar>

    <div class="count-down-wrapper">
      <div class="count-down" data-payleftseconds="839">
        <p class="time-left">
          请在
          <span class="minute">7</span>
          分钟
          <span class="second">4</span>
          秒内完成支付
        </p>
        <p class="tip">超时订单会自动取消，如遇支付问题，请致电猫眼客服：1010-5335</p>
      </div>
    </div>
    <div class="detail"></div>
  </div>
</template>

<script>
import ProgressBar from '../components/progressBar.vue';
export default {
  name: 'step3',
  data() {
    return {};
  },
  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss" scoped>
.count-down-wrapper {
  width: 100%;
  height: 110px;
  padding-top: 8px;
  margin-bottom: 40px;
  background-color: #fff3f3;
  .count-down {
    padding-left: 55px;
    min-height: 41px;
    margin-left: 30px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAAAXNSR0IArs4c6QAABPdJREFUWAnNWFtsVEUYnn+XFopGQQNiCJfaAhK2oBgLr8aY2CgiUYKQ8FBBH+SFRkMiikZq0ocKCQkkCrESbzESExMh4IMPGHkQ3rpbJFzkEomVVQvaUGq7+/P9cy47cy57tkV2mWTO/PNfv5n5Z86cQ5zNvqGUelcx3422NoVoEIHfI4C5BiD31AaFEZXon5Qi+tRg1Y4EDpLofPbsdHX9uizTYdT5wqtSOY04bWry5EFqbr4yQYIKgeYK9/b+hrZ6YIguU0vLr4JBSspp/OcfPlUdwopng0mlfq8OBjcKc78ZzwajVK8prAJtxbPBMB+vAoBSiHTaiqd3kydlZlK53NWIc+cqdKZ4euNow/ZE/6pMZgoRFT1/1sxAwAByyBPqluhzWrx4Ks6jjyx+pR3YufafBEwOmUBEZoHRykRfWkbMD+o+85toByxZcmcAgxM7HGaun5LNFyXSocJgMpnvMQvmlnsSr4ynMLoBlUptCzpI6L8jdpzLPQG9p31d8S9xAiUEBlM3Ap2ugF439/XVUyazB/y9AVlcdx+A7EYe1qli8YOAUpcbx2KHwGjppEkfYnYu+ZrMS1ShsF8neEvLa5D1+LJoYr8SPSm53Md4LtW0PMSv+I8okWBo3rxh6G6EoZ/p6K+F4260RRzhG1Q6vRryi5ZPCUS0BjPSjpGPYnm6kCvrfR3ZIESvuv59tkdYW9tjei1y5X04e8vru+0RAGmnRYv6MVMpAGwD/1nUg8iDwwBR1C/eoaEe2D5j2RJ1YSBbLZ7RKQ/GCbYXTjcYNkLmUXeohoYejFJoXfjMmWlqeLgdOfI6GNNdttPI0mYyrwhYi290yoIRPZ0n2exOkJsNO4ck+g9EN0b7Nt74nViCLTCoj9DbBSAdAMIhmcGIzBlDDv/EyIEO8Fah86cpcwO3ah7RshAQR38VwG5OAiI+EsF4wQHoW+yCJgCSJE4uRDtwaWrWdsnaWqNiMFp7aGgFRv9iRb6ZX8DtcUVFuq6SvuklGeDAuw/njJwtK5N0DflcAP8MubRa1dW9TAsX/mXIIsnEmQGQ2QByAtZjAWIGe06NjJzgkyfnmMwouiwYnDOzAOQoDB+KMh4Dr1H86IGVMYoFgy09AdP8NWznlrGvXMQ8B+fPAfitizOKBaP6+jphtDzOcFx85lYlp3pMiQTDp041uqdojNktsTuQ1JHLHgkGCbcd4WKn85agiF8i8R8qITD6Jcf8Ukjz/2TAP5J5RtBlCIy6cWMdlCo6f4LOxtBPY3dJHKuEwTCvtTRuV4coFMcCw/39d2E7l25ltwuI+GV+FEslPxv8Yi9HPv84JDbPUyX6Gw4uIPnOo8pn8CD68pPnF63CvA/tz6jyWSPfWDNRH4ZOKDfAl5JGXYb6g3Sk2IGJWmHsSJzXvxx6R1V9/TFasOCyI4h+4u18ABKpVuFz5+7FhUvu0PJ10Ab/j/gKhYIMPgZMsThbKzqX8U24EB3BPWTUNx4HQU1N12D2o1u3YmlaAewr9Bsxg9b7KjgzM/XMMAuo73C/HcQB9RO+l47BMAsnWdz6LwBg7NURdn6BrSzZLNgvhd/HdC0UZGYaXCVZSr/oaydeiA+AI8n0DQyW+NJoooAAeYjkd0Ye+qPol66TzPejL3kyA7KJ0S58bhbU896fKwL63WBs8sW1I/bcYX87ldqOaZUtWrvixO+8CTchtZNySYUQAAAAAElFTkSuQmCC)
      no-repeat;
    background-position: 0 17px;
  }
  .time-left {
    font-size: 16px;
    color: #666;
    margin-bottom: 4px;
    .minute,
    .second {
      font-size: 32px;
      color: #f03d37;
      margin: 0 5px;
    }
  }
  .tip {
    font-size: 14px;
    color: #f03d37;
  }
}
</style>
