<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-2 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Reportes</h2>

                <div class="form-outline form-white mb-4">
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    @click="goUser"
                    type="submit"
                  >
                    Usuarios
                  </button>
                </div>
                <div class="form-outline form-white mb-4">
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    @click="goStudent"
                    type="submit"
                  >
                    Estudiantes
                  </button>
                </div>
                <div class="form-outline form-white mb-4">
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    @click="goAudit"
                    type="submit"
                  >
                    Auditoria
                  </button>
                </div>
                <div class="form-outline form-white mb-4">
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    @click="back"
                    type="submit"
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  name: 'Reports',
  setup(){
    const router = useRouter();

    const goUser = () => router.push('Users')
    const goStudent = () => router.push('Students')
    const goAudit = () => router.push('Audit')
    const back = () => router.push('Menu')

    return{
      goUser,
      goStudent,
      goAudit,
      back
    }
  }
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
