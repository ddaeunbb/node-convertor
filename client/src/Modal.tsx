import { useEffect } from "react";

interface ModalProps {
  closefn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({closefn}: ModalProps) {
  let timeId: number;

  useEffect(() => {
    return () => clearTimeout(timeId);
  }, []);

  const closeHandler = () => {
    document.querySelector("figure")!.classList.remove("fade-in");
    timeId = setTimeout(() => closefn(false), 1200);
    document.querySelector("figure")!.classList.add("fade-out");
  }

  return (
    <figure className="modal fade-in">
      <div className="modal-wrap">
        <button onClick={closeHandler}/>
        <h3 className="modal-heading">양식에 맞춰 입력해주세요.</h3>
      </div>
    </figure>
  )
}
