pragma solidity  >= 0.5.0 < 0.9.0;

contract BookSell{
    address payable owner;
    constructor(){
        owner = payable(msg.sender);
    }
    struct Receipt{
        uint256 timestamp ;
        string name;
        address buyer;
        string book;
        string writer;
    }
    Receipt[] receipts;
    function buyBook(string memory name, string memory book, string memory writer) public payable{
        require(msg.value>0,"Payment is not acceptable");
        owner.transfer(msg.value);
        receipts.push(Receipt(block.timestamp, name, msg.sender,book, writer));
    }
    function getReceipts() public view returns(Receipt[] memory) {
        return receipts;
    }
}