import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import React from "react";

const MyTabs = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h2 className="text-gray-800 font-extrabold text-[30px]">
          How It Works
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Tabs defaultValue="account" className="bg-slate-400 p-4">
          <TabsList className="flex justify-center">
            <TabsTrigger value="tab1">Sign Up</TabsTrigger>
            <TabsTrigger value="tab2">Customize Your Profile</TabsTrigger>
            <TabsTrigger value="tab3">AI-Driven Feedback</TabsTrigger>
            <TabsTrigger value="tab4">Track Your Progress</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="tab2">Change your password here.</TabsContent>
          <TabsContent value="tab3">Tab3</TabsContent>
          <TabsContent value="tab4">Tab4</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MyTabs;
