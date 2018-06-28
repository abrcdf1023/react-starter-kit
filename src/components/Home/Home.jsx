// redux
import { withAmiiboList } from '@/redux/modules/decorators'
import { getAmiiboListIsGetting, getAmiiboListError, getAmiiboListErrorMsg } from '@/redux/modules/ui/Home/selectors'
import { simpleConnect } from '@/utils'
// component
import _map from 'lodash/map'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Container, Button, Header, Card, Image, Select, Message, Segment,
} from 'semantic-ui-react'

import I18N from './I18N'

const mapStateToProps = state => ({
  isGetting: getAmiiboListIsGetting(state),
  error: getAmiiboListError(state),
  errorMsg: getAmiiboListErrorMsg(state),
})
@withAmiiboList
@simpleConnect(mapStateToProps, 'ui.home')
export default class Home extends Component {
  static propTypes = {
    amiiboList: PropTypes.objectOf(PropTypes.any).isRequired,
    isGetting: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,

    fetchGetAmiiboList: PropTypes.func.isRequired,
    fetchGetAmiiboListCancel: PropTypes.func.isRequired,
  }

  static defaultProps = {
    errorMsg: '',
  }

  state={}

  render() {
    const {
      amiiboList, isGetting, error, errorMsg, fetchGetAmiiboList, fetchGetAmiiboListCancel,
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
          options={[{
            key: '1', value: 'mario', text: 'mario',
          }, {
            key: '2', value: 'zelda', text: 'zelda',
          }, {
            key: '3', value: 'error', text: 'error',
          }]}
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
        { error ? <Message header={errorMsg} negative /> : null }
        <Segment loading={isGetting}>
          <Card.Group>
            {
              _map(amiiboList, amiibo => (
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
