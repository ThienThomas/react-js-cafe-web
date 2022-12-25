import { AiIcons } from '../../assets/icons';
import './ModalEdit.module.css';
import styles from './ModalEdit.module.css';
const ModalEdit = (props: { setIsOpen: any }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    //do sth
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Thay đổi thông tin giao hàng</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => props.setIsOpen(false)}>
            <AiIcons.AiOutlineClose size={15} className="" />
          </button>
          <div className={styles.modalContent}>
            <form className="w-full">
              <div className="flex flex-col items-center mb-5 gap-3 justify-between w-full">
                <input
                  type="text"
                  placeholder="Nhập tên người nhận hàng"
                  className="w-full border border-solid rounded-xl p-[10px_20px] text-sm outline-none"
                />
                <input
                  type="number"
                  placeholder="Nhập số điện thoại"
                  className="w-full border border-solid rounded-xl p-[10px_20px] text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="Nhập địa chỉ nhận hàng"
                  className="w-full border border-solid rounded-xl p-[10px_20px] text-sm outline-none"
                />
              </div>
              <div className="flex items-center justify-center gap-8">
                <button className={styles.deleteBtn} onSubmit={handleSubmit}>
                  Áp dụng
                </button>
                <div>Huỷ</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
