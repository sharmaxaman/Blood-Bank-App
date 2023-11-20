import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Blood donation is an extraordinary act of compassion that has the power to save lives and bring hope to those in need. By generously giving a part of ourselves, we provide a lifeline to individuals battling illness, injury, and medical emergencies. Each drop of donated blood symbolizes a gift of life, a tangible manifestation of our willingness to stand by one another in times of vulnerability. It is a selfless gesture that transcends boundaries and unites us in a common purpose—to alleviate suffering and ensure the continuity of life's precious moments. Through blood donation, we become silent heroes, quietly spreading kindness and creating ripples of positive change throughout our communities. Every donor embodies the spirit of empathy, reminding us that even the smallest contributions can make an immeasurable difference.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
