import { FormControl, InputAdornment, TextField, Container, IconButton } from '@material-ui/core'
// import { AccountCircle, SearchIcon } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import '../styles/style.css'





class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
        }

        this.handleSearch = this.handleSearch.bind(this)
        // this.getResult = this.getResult.bind(this)

    }

    handleSearch(e) {
        this.setState({
            searchText: e
        })
        console.log(e)
    }


    // async getResult(e) {
    //     const data = await fetchData(e)
    //     this.setState({
    //         weather:data
    //     })
    //     console.log(data)
    //     console.log("searching " + e)
    // }

    render() {

        return (

            <Container maxWidth="sm">
                <FormControl>
                    <TextField
                        style={{
                            background: "white",
                            width: "600px",
                            height: "40px",
                            marginTop: "30px",
                            borderRadius: "20px",
                            padding: "5px 10px",
                        }}
                        value={this.state.searchText}
                        id="search"
                        placeholder="Search"
                        onChange={(e) => this.handleSearch(e.target.value)}
                        // onKeyPress={(e) => { e.key == 'Enter' && this.getResult(this.state.searchText) }}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={() => this.props.getResult(this.state.searchText)}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
            </Container>

        )
    }
}

export default Search