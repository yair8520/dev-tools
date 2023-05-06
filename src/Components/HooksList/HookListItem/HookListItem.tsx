import React from 'react';
import styles from './HookListItem.module.css';
import { HookListItemProps } from './HookListItemProps';
import {
  Card,
  CardHeader,
  IconButton,
  CardActions,
  styled,
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import { CIconButton } from '../../CIconButton';
import { Text } from '../../Text';
import { createReactTypeScriptSandbox } from '../../../Helpers/SandBox';
import { ExpandCodeSection } from '../../ExpandCodeSection';

export const HookListItem = ({ item }: HookListItemProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props: any) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return (
    <div className={styles.container}>
      <Card id={item.title} className={styles.card}>
        <CardActions disableSpacing>
          <CardHeader
            onClick={handleExpandClick}
            disableTypography
            title={
              <Text variant="h6" bold>
                {item.title}
              </Text>
            }
            sx={{ flexGrow: 1, textAlign: 'left' }}
          />
          {item.launch && (
            <CIconButton
              onClick={() => createReactTypeScriptSandbox(item.code)}
              title={'Try'}
            >
              <LaunchIcon />
            </CIconButton>
          )}
          {item.type === 'native' ? (
            <CIconButton title={'Mobile'}>
              <StayPrimaryPortraitIcon />
            </CIconButton>
          ) : item.type === 'web' ? (
            <CIconButton title={'Web'}>
              <WebIcon />
            </CIconButton>
          ) : null}
          <ExpandMore
            onClick={handleExpandClick}
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <ExpandCodeSection item={item} expanded={expanded} />
      </Card>
    </div>
  );
};
