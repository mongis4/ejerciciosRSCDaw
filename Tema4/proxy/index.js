import { StudentRecordService } from "./StudentRecordService.js";
import { StudentRecordProxy } from "./StudentRecordProxy.js";

const service = new StudentRecordService();

const studentProxy = new StudentRecordProxy(service, {
  username: "lucia",
  role: "student",
  studentId: "student-01",
});

const teacherProxy = new StudentRecordProxy(service, {
  username: "rafa",
  role: "teacher",
});

const adminProxy = new StudentRecordProxy(service, {
  username: "admin",
  role: "admin",
});

console.log(studentProxy.getRecord("student-01"));
//studentProxy.getRecord("student-02"); // Debe fallar

teacherProxy.getRecord("student-02");
teacherProxy.getRecord("student-02"); // Debe usar caché

teacherProxy.updateObservation("student-02", "Nueva observación"); // Debe fallar
adminProxy.updateObservation("student-02", "Seguimiento realizado");
console.table(adminProxy.getAccessLog());
