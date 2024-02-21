const { Appointment } = require("../Models/Appoinments.model");
exports.CreateAppoinments = async (req, res) => {
  try {
    const userID = req.user.id;
    console.log(req.body)
    const { appointmentDate,doctorID, appointmentTime, message } = req.body;

    const appointment = await new Appointment({
      userID,
      doctorID,
      appointmentDate,
      appointmentTime,
      message,
    });

    const createdAppointment = await appointment.save();
    const find = await Appointment.findById(createdAppointment._id)
      .populate("doctorID", "-password -token")
      .populate("userID", "-password -token")

      .exec();

    return res.status(200).json(find);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.UsersAppoinments = async (req, res) => {
  try {
    // TODO:gets user id from rq.user
    const { id } = req.user;
    const appoinment = await Appointment.find({ userID: id })
      .populate("doctorID", "-password")
      .exec();

    if (!appoinment) {
      return res
        .status(400)
        .send({ message: "Sorry cannot find your Appoinments" });
    }
    return res.status(200).json(appoinment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
exports.UpdateAppoinmnts = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("params id",id)
    console.log(req.body)
    const appoiments = await Appointment.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).send(appoiments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
exports.DeletesAppoinments = async (req, res) => {
  try {
    const { id } = req.params;
    const appoinment = await Appointment.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .send({ message: "Deleted SuccessFully!!", appoinment });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
