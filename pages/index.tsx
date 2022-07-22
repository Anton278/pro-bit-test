import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getBTCPrice } from "../redux/asyncActions";
import { useAppDispatch } from "../redux/store";
import { selectBTC, selectStatus } from "../redux/tokens/selectors";
import styled from "../styles/Home.module.scss";

const Home: NextPage = () => {
    const status = useSelector(selectStatus);
    const BTCPrice = useSelector(selectBTC);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // for init render
        dispatch(getBTCPrice());

        // const interval = setInterval(() => {
        //     dispatch(getBTCPrice());
        // }, 10000);
        // return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <>
            <h1>Tokens price</h1>
            <div className={styled.wrapp}>
                <Image src="/btc.svg" width={48} height={48} />
                &nbsp;:&nbsp;
                {status === "success" && <span>{BTCPrice} USD</span>}
                {status === "error" && (
                    <p className={styled.errorMessage}>
                        Error occured. Please, try again later.
                    </p>
                )}
            </div>
        </>
    );
};

export default Home;
