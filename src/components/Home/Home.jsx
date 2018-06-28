import _map from 'lodash/map'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Container, Button, Header, Card, Image, Select, Message, Segment,
} from 'semantic-ui-react'
import withHomeProps from './withHomeProps'

import I18N from '@/components/I18N'

@withHomeProps
export default class Home extends Component {
  static propTypes = {
    characterList: PropTypes.objectOf(PropTypes.any).isRequired,
    amiiboList: PropTypes.objectOf(PropTypes.any).isRequired,

    fetchGetCharacterList: PropTypes.func.isRequired,
    fetchGetAmiiboList: PropTypes.func.isRequired,
    fetchGetAmiiboListCancel: PropTypes.func.isRequired,
  }

  state={}

  componentDidMount() {
    this.props.fetchGetCharacterList()
  }

  render() {
    const {
      characterList, amiiboList, fetchGetAmiiboList, fetchGetAmiiboListCancel,
    } = this.props
    return (
      <Container style={{ paddingTop: '2rem' }}>
        <Header>
          I18N support
        </Header>
        <I18N />
        <Header>
          Simple fetch
        </Header>
        <p>
          Our async solution is using redux observable and if you dig in deep you'll find that we have resolve some annoying issue
        </p>
        <Select
          placeholder="Select amiibo"
          options={_map(characterList, el => ({
            key: el.key,
            value: el.name,
            text: el.name,
          }))}
          onChange={(e, data) => this.setState({ amiibo: data.value })}
        />
        <Button
          onClick={() => {
            fetchGetAmiiboList({
              name: this.state.amiibo,
            })
          }}
        >
        Get Amiibo
        </Button>
        <Button
          onClick={() => {
            fetchGetAmiiboListCancel()
          }}
        >
        Cancel
        </Button>
        { amiiboList.error ? <Message header={amiiboList.errorMsg} negative /> : null }
        <Segment loading={amiiboList.isGetting}>
          <Card.Group>
            {
              _map(amiiboList.data, amiibo => (
                <Card key={amiibo.tail}>
                  <Image src={amiibo.image} />
                  <Card.Content>
                    <Card.Header>
                      {amiibo.name}
                    </Card.Header>
                    <Card.Meta>
                      {amiibo.gameSeries}
                    </Card.Meta>
                    <Card.Description>
                      {amiibo.amiiboSeries}
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))
            }
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}
