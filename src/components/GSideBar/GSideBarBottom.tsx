import Grid2 from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {SideButtonChildren} from "./types";

export type GSideBarBottomProps = {
    children: SideButtonChildren;
};

const GSideBarBottom = ({children}: GSideBarBottomProps) => {
    return (
        <Grid2>
            <Divider />
            <List>
                { children }
            </List>
        </Grid2>
    );
};

export default GSideBarBottom;
