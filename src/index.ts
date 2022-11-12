import express, {Request, Response} from 'express';
import { users } from './data';
import { Users, ACCOUNT_TYPE } from './types';
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

app.get('/user',(req:Request, res:Response)=>{
    try{

    }catch(error:any){
        res.status(400).send("Erro na requisição")
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});