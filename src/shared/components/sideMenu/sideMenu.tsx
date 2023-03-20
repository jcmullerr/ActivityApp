import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface ISideMenuData{
  children: React.ReactNode
}
export const SideMenu : React.FC<ISideMenuData> = ({children}) => {
  const theme = useTheme();
  return (
    <>
      <Drawer open={true} variant='persistent' >
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column' >
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar 
              sx={{height:theme.spacing(12),width:theme.spacing(12)} }
              src='https://media.licdn.com/dms/image/C4D03AQES28roQlTIwA/profile-displayphoto-shrink_800_800/0/1646155184828?e=1678924800&v=beta&t=7bv2s1aOcyfydNDkDTg7HBdwiTSKwuIhLg_hSxjZCQk'
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon></HomeOutlinedIcon>
                </ListItemIcon>
                <ListItemText primary='inbox' />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};