// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mock is ERC20 {

    uint8 private dec;
    constructor(uint8 _decimals) ERC20("BUSD", "BUSD") {    
        dec = _decimals;
    }

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return dec;
    }

}