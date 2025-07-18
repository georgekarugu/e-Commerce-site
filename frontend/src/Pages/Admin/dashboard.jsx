import { useState } from "react";

import { Card, CardContent } from "../../Components/card";

export default function Dashboard() {

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-gray-800 shadow-md">
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-white">Total Sales</h3>
            <p className="text-3xl text-green-400 font-bold">$12,340</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 shadow-md">
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-white">Total Orders</h3>
            <p className="text-3xl text-blue-400 font-bold">345</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 shadow-md">
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-white">Total Customers</h3>
            <p className="text-3xl text-yellow-400 font-bold">120</p>
          </CardContent>
        </Card>
      </div>

      
    </>

  );
}
