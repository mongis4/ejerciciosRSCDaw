export class StudentRecordProxy {
  constructor(service, user) {
    this.service = service;
    this.user = user;
    this.cache = new Map();
    this.accessLog = [];
  }
  getRecord(studentId) {
    // TODO: registrar el intento con fecha, usuario, acción y studentId

    // TODO: comprobar permisos
    const permiso = this.#isAllowedToRead(studentId);
    // student: solo su propio expediente, usando user.studentId
    // teacher y admin: cualquier expediente
    this.#register("getRecord", studentId, permiso);

    if (!permiso) throw new Error("Permiso denegado");

    // TODO: devolver caché si ya existe
    if (this.cache.has(studentId)) {
      return this.cache.has(studentId);
    }
    // TODO: consultar el servicio real, guardar y devolver el expediente
    const consulta = this.service.getRecord(studentId);
    this.cache.set(studentId, consulta);
    return consulta;
  }
  updateObservation(studentId, observation) {
    // TODO: registrar el intento
    const permiso = this.user.role === "admin";

    this.#register("updateObservation", studentId, permiso);
    // TODO: permitir la operación únicamente al rol admin
    // TODO: llamar al servicio real
    if (!permiso) {
      throw new Error("Permiso denegado");
    }
    this.service.updateObservation(studentId, observation);
    // TODO: invalidar la entrada correspondiente de la caché
    this.cache.delete(studentId);
  }
  getAccessLog() {
    // TODO: devolver una copia para evitar modificaciones externas
    const record = this.accessLog;
    return structuredClone(record);
  }
  #isAllowedToRead(studentId) {
    // TODO
    if (
      this.user.studentId === studentId ||
      this.user.role === "admin" ||
      this.user.role === "teacher"
    ) {
      return true;
    }
    return false;
  }
  #register(action, studentId, allowed) {
    this.accessLog.push({
      date: new Date().toISOString(),
      user: this.user.username,
      action: action,
      studentId: studentId,
      allowed: allowed,
    });
  }
}
