<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-2 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Registro</h2>

                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="userNameTxt"
                    class="form-control form-control-lg"
                    v-model="user.username"
                    required
                  />
                  <label class="form-label" for="userNameTxt">User Name</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="passwordTxt"
                    class="form-control form-control-lg"
                    v-model="user.password"
                    required
                  />
                  <label class="form-label" for="passwordTxt">Password</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="number"
                    id="levelTxt"
                    class="form-control form-control-lg"
                    v-model="user.level"
                    required
                  />
                  <label class="form-label" for="levelTxt">Nivel</label>
                </div>

                <!--<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> -->

                <button
                  class="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  @click="register"
                >
                  Registrar
                </button>
              </div>

              <div>
                <router-link class="link" to="/">
                  Ya tienes una cuenta? Iniciar sesion
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
import Axios from 'axios'
import { useRouter } from 'vue-router'
import CryptoJs from 'crypto-js'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const user = reactive({
      username: '',
      password: '',
      level: 0,
    })
    const register = () => {
      user.password = user.password != '' ? CryptoJs.SHA3(user.password, { outputLength: 256 }).toString() : ''
      console.log(user)
      Axios.post('/users', user)
        .then((resp) => {
          console.log(resp)
          router.push('/')
        })
        .catch((err) => console.error(err))
    }
    return {
      user,
      register,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  color: #2574fc;
  text-decoration: none;
  font-weight: bold;
}
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}
</style>
