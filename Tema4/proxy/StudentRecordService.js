export class StudentRecordService {
  constructor() {
    this.records = new Map([
      [
        "student-01",
        {
          studentId: "student-01",
          grades: [7, 8, 6, 9],
          observations: "Evolución positiva",
        },
      ],
      [
        "student-02",
        {
          studentId: "student-02",
          grades: [5, 6, 7, 6],
          observations: "Debe mejorar la entrega de tareas",
        },
      ],
    ]);
  }
  getRecord(studentId) {
    console.log("Consultando el expediente en la base de datos...");
    const record = this.records.get(studentId);
    if (!record) throw new Error("Expediente no encontrado");
    return structuredClone(record);
  }
  updateObservation(studentId, observation) {
    const record = this.records.get(studentId);
    if (!record) throw new Error("Expediente no encontrado");
    record.observations = observation;
    return structuredClone(record);
  }
}
