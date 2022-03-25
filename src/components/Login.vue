<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-2 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Iniciar sesión</h2>
                <form @submit.prevent="login">
                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="txtUsername"
                      class="form-control form-control-lg"
                      v-model="loginRequest.username"
                      required
                    />
                    <label class="form-label" for="txtUsername">Nombre de usuario</label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="txtPassword"
                      class="form-control form-control-lg"
                      v-model="loginRequest.password"
                      required
                    />
                    <label class="form-label" for="txtPassword"
                      >Contraseña</label
                    >
                  </div>
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                </form>
              </div>

              <div>
                <router-link class="link" to="Register">
                  No tienes cuenta? Registrar
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
import { useRouter } from 'vue-router'
import Axios from 'axios'
import CryptoJs from 'crypto-js'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()

    const loginRequest = reactive({
      username: '',
      password: ''
    });

    const login = () => {
      loginRequest.password = loginRequest.password != '' ? CryptoJs.SHA3(loginRequest.password, { outputLength: 256 }).toString() : ''
      Axios.post('/login',loginRequest)
      .then((resp) => {
        console.log(resp)
        router.push('/menu')
      })
      .catch((err) => console.error(err))
    }

    return {
      loginRequest,
      login,
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
