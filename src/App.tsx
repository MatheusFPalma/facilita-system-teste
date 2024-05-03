import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Container, AppBar, Toolbar, Typography, Grid } from '@mui/material';

const App: React.FC = () => {
  const handleFormSubmit = (taskData: { title: string; description?: string }) => {
    console.log('Task Submitted:', taskData);
    // logica do backend
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          {/* Passando handleFormSubmit para onSubmit */}
          <TaskForm onSubmit={handleFormSubmit} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TaskList onSubmit={function (taskData: { title: string; description: string; }): void {
            throw new Error('Function not implemented.');
          } } />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
