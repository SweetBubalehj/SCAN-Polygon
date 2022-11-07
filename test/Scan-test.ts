import { expect } from "chai"
import { ethers } from "hardhat"

const toWei = (value: any) => ethers.utils.parseEther(value.toString())

const fromWei = (value: any) =>
    ethers.utils.formatEther(
        typeof value === "string" ? value : value.toString()
    )

describe("Scan", function () {
    let owner: any
    let user: any

    let scan: any

    let token: any
    let contract: any

    beforeEach(async function () {
        [owner, user] = await ethers.getSigners()

        const Scan = await ethers.getContractFactory("Scan")
        scan = await Scan.deploy()

        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy("Token", "TKN", toWei(1000000))

        const Contract = await ethers.getContractFactory("RandomContract")
        contract = await Contract.deploy()
    })

    it("is deployed", async function () {
        expect(await scan.deployed()).to.eq(scan)
        expect(await token.deployed()).to.eq(token)
        expect(await contract.deployed()).to.eq(contract)
    })

    describe("getTokenData", function () {
        it("can get token info", async function () {
            const data = await scan.getTokenData(token.address)

            expect(data.symbol).to.eq('TKN')
            expect(data.decimals).to.eq(18)
        })
    })

    describe("getUsersData", function () {
        it("can get users data", async function () {
            const addresses: any[] = [owner.address, user.address, contract.address]
            const data = await scan.getUsersData(addresses)

            expect(data[0]).to.eq(false)
            expect(data[1]).to.eq(false)
            expect(data[2]).to.eq(true)
        })
    })
})