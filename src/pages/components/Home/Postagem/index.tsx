import React from 'react';

import { Post, Separator, ChannelImage, ChannelNome, PostagemConteudo, PostagemImage, PostagemLike, PostagemLikeNumber, PostagemDislike, PostagemComments, PostagemCommentsNumber, PostagemReport, Conteudo, Grupo, Feedback, } from './styles';

interface Props{
    channel: string;
    channelImage: string;
    like: string;
    comments: string;
    conteudo: string;
    image: string;
}

const Postagem: React.FC<Props> = ({channel, channelImage, like, comments, conteudo, image}) => {
    const Letras = conteudo.split('');
    let Resultado = '';
    var PrimeiraVez = true;

    Letras.forEach((key: string, value: number) => {
        if(Letras.length <= 96){
            Resultado += Letras[value];

            return;
        }

        if(Resultado.length > 96){
            if(PrimeiraVez){
                PrimeiraVez = false;

                Resultado = Resultado.concat('...');
            }

            return;
        }

        Resultado += Letras[value];
    });


    return (
        <Post
            key={like}
        >
            <Separator>
                <ChannelImage src={channelImage} />
                <ChannelNome>{channel}</ChannelNome>
            </Separator>

            <Conteudo>
                <Grupo
                    className="Conteudo"
                >
                    <PostagemConteudo>{Resultado}</PostagemConteudo>
                    <PostagemImage src={image} />
                </Grupo>
            </Conteudo>

            <Feedback>
                <Grupo>
                    <PostagemLike 
                        className="like"
                    />

                    <PostagemLikeNumber>{like}l</PostagemLikeNumber>

                    <PostagemDislike 
                        className="deslike"
                    />
                </Grupo>

                <Grupo>
                    <PostagemComments />
                    <PostagemCommentsNumber>{comments}</PostagemCommentsNumber>
                    <PostagemReport />
                </Grupo>
            </Feedback>    
        </Post>
    );
}

export default Postagem;