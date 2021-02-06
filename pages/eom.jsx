import axios from "axios";
import styles from "../styles/Oem.module.css";

export const eom = ({ employee }) => {
  console.log(employee);
  return (
    <div className='page-container'>
      <div className={styles.main}>
        <h1>Main Profile</h1>
        <div className={styles.employee}>
          <h3>{employee.first_name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const res = await axios("https://my-json-server.typicode.com/mrIvancicIvica/nextjs_news/employee");
  const employee = res.data;

  return {
    props: {
      employee,
    },
  };
};

export default eom;
