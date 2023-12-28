import { Routes, Route, Outlet } from "react-router-dom";
import { AddTraining } from "./components/AddTraining.tsx";
import {TrainingTable} from "./components/TrainingTable.tsx";

const TrainingPage = () => (
    <Routes>
        <Route
            element={
                <>
                    <></>
                    <Outlet />
                </>
            }
        >
            <Route
                path="add-training"
                element={
                    <>
                        {/*<PageTitle breadcrumbs={profileBreadCrumbs}>List</PageTitle>*/}
                        <AddTraining />
                    </>
                }
            /><
            Route
                path="table"
                element={
                    <>
                        {/*<PageTitle breadcrumbs={profileBreadCrumbs}>List</PageTitle>*/}
                        <TrainingTable />
                    </>
                }
            />
        </Route>
    </Routes>
);

export default TrainingPage;
