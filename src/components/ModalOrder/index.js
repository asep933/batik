"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const ModalOrder = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("typing");
  const [input, setInput] = useState({
    nama: "",
    kuantitas: "",
  });

  useEffect(() => {
    if (input.nama !== "" && input.kuantitas !== "") {
      setStatus("success");
    } else {
      setStatus("typing");
    }
  }, [input]);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  const handleNama = (e) =>
    setInput((value) => ({
      ...value,
      nama: e.target.value,
    }));
  const handleKuantitas = (e) =>
    setInput((value) => ({
      ...value,
      kuantitas: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput({ nama: "", kuantitas: "" });
  };

  return (
    <>
      <button
        className="bg-transparent hover:text-fourth text-primary border-third border-2
        p-3 hover:bg-third rounded-lg transition duration-300 ease-in-out"
        onClick={() => setOpenModal(true)}
      >
        Checkout
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className="bg-fourth" />
        <Modal.Body className="bg-fourth">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Order disini
              </h3>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Email
                </label>
                <input
                  onChange={handleNama}
                  value={input.nama}
                  required
                  type="text"
                  name="nama"
                  placeholder="email..."
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="kuantitas" className="font-semibold">
                  Kuantitas
                </label>
                <input
                  onChange={handleKuantitas}
                  value={input.kuantitas}
                  required
                  min={1}
                  type="number"
                  name="kuantitas"
                  placeholder="kuantitas..."
                  className="input input-bordered w-full"
                />
              </div>

              {success && <p className="text-green-500">*sukses order!</p>}

              <div className="w-full">
                <button
                  disabled={status === "typing"}
                  onClick={() => setSuccess(true)}
                  className={`bg-third text-fourth hover:bg-opacity-75 p-2 rounded-lg
                  ${status === "typing" ? "bg-opacity-75" : ""}`}
                  type="submit"
                >
                  Order
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalOrder;
