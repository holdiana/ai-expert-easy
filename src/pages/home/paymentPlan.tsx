import { Grid, ListItemText, Typography } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './home.styled';

const PaymentPlan:React.FC = () => {

  return (
    <S.PaymentContainer >
      <S.PaymentTitle variant='h2'> Our plan</S.PaymentTitle>
      <S.PaymentCard sx={{ maxWidth: 648 }}>
        <S.PaymentContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <S.Price variant="h5">
                $19.99<span>/month</span>
              </S.Price>
              <Typography variant="body1">
                Join thousands of other customers and let AI boost your expertise!
              </Typography>
              <S.PaymentButton size="small">Join now</S.PaymentButton>
              <S.ContentCancel>Cancel Anytime</S.ContentCancel>
              </Grid>
            <Grid item xs={12} md={6}>
              <S.ListScope>
                <S.ListScopeItem>
                  <CheckIcon/>
                  <ListItemText
                    primary="Access Exclusive AI-Driven Insights"
                  />
                </S.ListScopeItem>
                <S.ListScopeItem>
                  <CheckIcon/>
                  <ListItemText
                    primary="Unlock Personalized Expert Solutions"
                  />
                </S.ListScopeItem>
                <S.ListScopeItem>
                  <CheckIcon/>
                  <ListItemText
                    primary="Save Time and Resources"
                  />
                </S.ListScopeItem>
              </S.ListScope>
            </Grid>
          </Grid>
        </S.PaymentContent>
    </S.PaymentCard>
    </S.PaymentContainer>
  );
}

export default PaymentPlan;