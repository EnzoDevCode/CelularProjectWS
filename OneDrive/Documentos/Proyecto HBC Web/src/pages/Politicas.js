import React from "react";
import ImageBackground from "../components/ImageBackground";
import cityImg from "../images/images-header/Carpisuyacu.jpg"; // Importar la imagen directamente
import "../styles/Nosotros.css";

import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import useFadeIn from "../hooks/useFadeIn";
import "../styles/Politicas.css";

const Politicas = () => {
  useFadeIn();

  return (
    <div>
      <ImageBackground url={cityImg} />
      <VerticalSeparator altura="5" />
      <TitleSubtitle
        title="Políticas de FADA"
        subtitle="Políticas de Reservas y Pagos"
        backgroundTitle="Políticas"
        position="centro"
      />
      <div className="container-top"></div>

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Reservas</h2>
          <p className="parrafo fade-in">
            • Anticipación: Para garantizar tu lugar en nuestras actividades, te
            pedimos que realices tu reserva al menos 48 horas antes de la fecha
            deseada. Esto nos ayuda a organizar mejor cada tour y asegurarnos de
            que tengas la mejor experiencia posible.
          </p>
          <p className="parrafo fade-in">
            • Confirmación: Para confirmar tu reserva, deberás realizar un
            adelanto del 50% del costo total de la actividad. Este pago asegura
            tu lugar y nos permite prepararnos para tu llegada.
          </p>
        </div>

        <div className="parrafo fade-in">
          <h2 className="title fade-in">Políticas de Pago</h2>
          <p className="titulo">
            • Aceptamos diferentes métodos de pago para tu comodidad:
          </p>
          <ul className="subtitulos">
            <li>Efectivo: Puedes realizar tu pago en nuestra oficina.</li>
            <li>
              Transferencias bancarias: Aceptamos transferencias a nuestras
              cuentas bancarias.
            </li>
            <li>
              Tarjetas de crédito y débito: Aceptamos pagos con tarjetas en
              nuestras instalaciones.
            </li>
            <li>
              Aplicaciones de pago: Puedes utilizar aplicaciones como Yape o
              Plin para hacer tu pago de manera rápida y sencilla.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Política de Cancelaciones</h2>
          <p className="parrafo fade-in">
            • Cancelación con anticipación: Si necesitas cancelar tu reserva,
            por favor infórmanos con más de 48 horas de anticipación. En este
            caso, te reembolsaremos el 80% de tu adelanto.
          </p>
          <p className="parrafo fade-in">
            • Cancelación tardía: Si cancelas tu reserva con menos de 48 horas
            de anticipación, lamentablemente, no podremos reembolsar el
            adelanto, ya que hemos reservado ese espacio especialmente para ti.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Modificaciones en la reserva</h2>
          <p className="parrafo fade-in">
            • Si deseas modificar la fecha o el tipo de actividad, háznoslo
            saber con la mayor anticipación posible. Trataremos de acomodar tu
            solicitud, siempre que haya disponibilidad.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Normativas Legales</h2>
          <p className="parrafo fade-in">
            • Nuestra política de reservas y pagos se alinea con las normativas
            y leyes nacionales e internacionales vigentes en Perú, asegurando
            que tus derechos como consumidor sean respetados. Estamos
            comprometidos a ofrecer un servicio transparente y ético en todo
            momento.
          </p>
        </div>
      </div>

      <TitleSubtitle
        title="Políticas de Atención al Cliente"
        subtitle="Atención al Cliente"
        backgroundTitle="Nuestros Clientes"
        position="centro"
      />

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Compromiso con el Cliente</h2>
          <p className="parrafo fade-in">
            En FADA Tours, nuestra prioridad es ofrecerte una experiencia
            turística única e inolvidable en Tarapoto y la Amazonía. Estamos
            comprometidos a brindarte un servicio excepcional, asegurando que
            cada detalle de tu viaje sea atendido con el máximo cuidado y
            atención.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Canales de Comunicación</h2>
          <ul className="subtitulos">
            <li>
              • WhatsApp: Puedes contactarnos directamente a través de WhatsApp
              para consultas, reservas y cualquier información que necesites.
              Responderemos en un plazo máximo de 24 horas.
            </li>
            <li>
              • Redes Sociales: Síguenos en nuestras redes sociales para conocer
              nuestras ofertas, actualizaciones y más. Estamos aquí para
              interactuar contigo y resolver tus dudas.
            </li>
            <li>
              • Correo Electrónico: También puedes escribirnos a nuestro correo
              electrónico para consultas más formales o detalles específicos
              sobre nuestros tours.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Atención Personalizada</h2>
          <p className="parrafo fade-in">
            • Cada cliente es único, y nos esforzamos por ofrecerte una atención
            personalizada. Si tienes alguna solicitud especial, no dudes en
            comunicárnoslo. Estamos aquí para hacer que tu experiencia sea
            perfecta.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Resolución de Problemas</h2>
          <p className="parrafo fade-in">
            • Si en algún momento sientes que no hemos cumplido con tus
            expectativas, por favor infórmanos de inmediato. Queremos conocer tu
            opinión y resolver cualquier inconveniente. Te garantizamos que
            tomaremos tus comentarios en serio y trabajaremos para mejorar.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Normativas Legales</h2>
          <p className="parrafo fade-in">
            • Nuestra política de atención al cliente se adhiere a las
            normativas y leyes nacionales e internacionales vigentes en Perú,
            garantizando que tus derechos como consumidor sean respetados. Esto
            incluye la protección de tus datos personales y el derecho a recibir
            información clara y veraz sobre nuestros servicios.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Retroalimentación</h2>
          <p className="parrafo fade-in">
            • Valoramos tus opiniones y sugerencias. Después de tu experiencia
            con nosotros, te invitamos a compartir tus comentarios. Esto nos
            ayuda a mejorar y a ofrecer un servicio de calidad a futuros
            viajeros.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Compromiso Ambiental</h2>
          <p className="parrafo fade-in">
            • Como empresa comprometida con el turismo responsable, fomentamos
            el respeto por la naturaleza y la cultura local. Te animamos a ser
            un viajero consciente y a cuidar de nuestro entorno durante tu
            visita.
          </p>
        </div>
      </div>

      {/* <TitleSubtitle
        title="Políticas de Sostenibilidad"
        subtitle="Sostenibilidad"
        backgroundTitle="Desarrollo Sostenible"
        position="centro"
      />

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Compromiso con la Sostenibilidad</h2>
          <p className="parrafo fade-in">
            En FADA Tours, creemos que el turismo debe ser una fuerza positiva
            para el medio ambiente y las comunidades locales. Nuestro compromiso
            es promover un turismo responsable que conserve la belleza natural
            de Tarapoto y la Amazonía, así como su rica diversidad cultural.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Conservación del Medio Ambiente</h2>
          <p className="parrafo fade-in">
            • Protección de la Naturaleza: Implementamos prácticas que ayudan a
            proteger el ecosistema local. Fomentamos el respeto por la flora y
            fauna, y buscamos minimizar el impacto ambiental de nuestras
            actividades turísticas.
          </p>
          <p className="parrafo fade-in">
            • Educación Ambiental: Informamos a nuestros clientes sobre la
            importancia de la conservación y cómo pueden contribuir a la
            protección del medio ambiente durante su visita.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Apoyo a la Comunidad Local</h2>
          <p className="parrafo fade-in">
            • Desarrollo Local: Colaboramos con guías locales, artesanos y
            proveedores de servicios para asegurar que los beneficios del
            turismo lleguen a la comunidad. Apoyamos el desarrollo sostenible de
            la región, promoviendo la economía local.
          </p>
          <p className="parrafo fade-in">
            • Respeto Cultural: Valoramos y respetamos la cultura y tradiciones
            de las comunidades que visitamos. Promovemos interacciones
            auténticas y respetuosas entre turistas y locales.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Cumplimiento de Normativas Legales</h2>
          <p className="parrafo fade-in">
            • Nuestra política de sostenibilidad está alineada con las
            normativas y leyes nacionales e internacionales que promueven
            prácticas sostenibles en el turismo. Esto incluye regulaciones sobre
            conservación ambiental y derechos de las comunidades indígenas.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Reducción de Residuos y Consumo Responsable
          </h2>
          <p className="parrafo fade-in">
            • Implementamos prácticas para reducir residuos, como el uso de
            materiales reciclables y la minimización del uso de plásticos.
            Fomentamos el consumo responsable entre nuestros clientes,
            animándolos a reducir su huella ecológica durante el viaje.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Capacitación y Conciencia</h2>
          <p className="parrafo fade-in">
            • Nuestro equipo está capacitado en prácticas sostenibles y en cómo
            ofrecer un servicio respetuoso con el medio ambiente. Promovemos la
            conciencia sobre la sostenibilidad en todos los niveles de nuestra
            organización.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Mejora Continua</h2>
          <p className="parrafo fade-in">
            • Nos comprometemos a revisar y mejorar constantemente nuestras
            prácticas de sostenibilidad. Evaluamos el impacto de nuestras
            acciones y buscamos nuevas maneras de ser más responsables y
            efectivos en nuestra labor.
          </p>
        </div>
      </div> */}

      <TitleSubtitle
        title="Política de Seguridad de FADA Tours"
        subtitle="Seguridad"
        backgroundTitle="Seguridad de FADA"
        position="centro"
      />

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Compromiso con la Seguridad</h2>
          <p className="parrafo fade-in">
            En FADA Tours, nuestra principal prioridad es garantizar la
            seguridad y bienestar de nuestros clientes, empleados y comunidades
            locales. Nos comprometemos a implementar medidas que aseguren un
            ambiente seguro durante todas nuestras actividades turísticas en
            Tarapoto y la Amazonía.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Cumplimiento de Normativas Legales</h2>
          <p className="parrafo fade-in">
            • Todas nuestras operaciones están en conformidad con las leyes y
            regulaciones nacionales e internacionales sobre seguridad en el
            turismo. Esto incluye normativas relacionadas con la seguridad de
            los viajeros, protección del medio ambiente y derechos de las
            comunidades indígenas.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Seguridad de Nuestros Clientes</h2>
          <p className="parrafo fade-in">
            • Protocolos de Seguridad: Implementamos protocolos de seguridad
            claros que nuestros guías y personal deben seguir. Estos incluyen la
            identificación de riesgos potenciales y la preparación de planes de
            emergencia.
          </p>
          <p className="parrafo fade-in">
            • Formación del Personal: Todos nuestros empleados reciben
            capacitación regular en seguridad, primeros auxilios y atención al
            cliente. Esto asegura que estén preparados para manejar cualquier
            situación que pueda surgir.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Información y Comunicación</h2>
          <p className="parrafo fade-in">
            • Transparencia: Proporcionamos información clara sobre las
            actividades y excursiones que ofrecemos, incluyendo cualquier riesgo
            potencial asociado. Los clientes deben conocer y aceptar estas
            condiciones antes de participar.
          </p>
          <p className="parrafo fade-in">
            • Canales de Comunicación: Mantenemos abiertos canales de
            comunicación para que los clientes puedan informar sobre inquietudes
            o incidentes. Estamos disponibles para responder preguntas y
            proporcionar asistencia en todo momento.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Colaboración con Comunidades Locales
          </h2>
          <p className="parrafo fade-in">
            • Fomentamos la colaboración con comunidades locales para garantizar
            la seguridad de nuestros recorridos. Esto incluye trabajar con guías
            locales que conocen bien la región y sus costumbres, lo que ayuda a
            asegurar una experiencia segura y auténtica.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Mejora Continua</h2>
          <p className="parrafo fade-in">
            • Nos comprometemos a revisar y mejorar constantemente nuestras
            políticas y prácticas de seguridad. Realizamos evaluaciones
            periódicas para identificar áreas de mejora y adaptamos nuestras
            medidas de seguridad según sea necesario.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Resposabilidad Compartida</h2>
          <p className="parrafo fade-in">
            • La seguridad es responsabilidad de todos. Animamos a nuestros
            clientes a seguir las indicaciones de nuestros guías y personal, así
            como a actuar de manera responsable durante sus actividades. Juntos,
            podemos garantizar una experiencia segura y placentera.
          </p>
        </div>
      </div>

      <TitleSubtitle
        title="Política de Conducta del Personal"
        subtitle="Conducta del Personal"
        backgroundTitle="Conducta"
        position="centro"
      />

      <div className="container-politics">
        {/* <div className="parrafo fade-in">
          <h2 className="title fade-in">Compromiso con la Excelencia</h2>
          <p className="parrafo fade-in">
            En FADA Tours, nuestro personal es el reflejo de los valores y la
            calidad de nuestros servicios turísticos. Cada colaborador tiene la
            responsabilidad de mantener altos estándares de comportamiento,
            basados en el respeto, la integridad y la profesionalidad, para
            garantizar la mejor experiencia posible a nuestros clientes.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Respeto y Trato Justo</h2>
          <p className="parrafo fade-in">
            • Respeto Mutuo: Todos los empleados deben tratar a los clientes,
            compañeros de trabajo, comunidades locales y socios con respeto y
            dignidad, sin importar su origen étnico, género, religión o
            cualquier otra característica personal.
          </p>
          <p className="parrafo fade-in">
            En FADA Tours, nuestro personal es el reflejo de los valores y la
            calidad de nuestros servicios turísticos. Cada colaborador tiene la
            responsabilidad de mantener altos estándares de comportamiento,
            basados en el respeto, la integridad y la profesionalidad, para
            garantizar la mejor experiencia posible a nuestros clientes.
          </p>
        </div> */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Responsabilidad y Profesionalismo</h2>
          <p className="parrafo fade-in">
            • Puntualidad y Cumplimiento: Se espera que el personal llegue
            puntualmente a sus tareas asignadas y cumpla con sus
            responsabilidades de manera efectiva. La puntualidad es esencial
            para mantener la calidad del servicio y asegurar la satisfacción de
            nuestros clientes.
          </p>
          <p className="parrafo fade-in">
            • Comportamiento Ético: Nuestros empleados deben actuar con
            integridad en todas las actividades y decisiones. El comportamiento
            inapropiado, como la falta de honestidad, está estrictamente
            prohibido.
          </p>
        </div>
        {/* <div className="parrafo fade-in">
          <h2 className="title fade-in">Seguridad en el Trabajo</h2>
          <p className="parrafo fade-in">
            • Seguir Protocolos de Seguridad: Todos los empleados deben seguir
            las políticas de seguridad establecidas por la empresa para
            garantizar tanto su propia protección como la de nuestros clientes.
            Esto incluye el cumplimiento de las normativas locales, nacionales e
            internacionales sobre seguridad en el turismo.
          </p>
          <p className="parrafo fade-in">
            • Prevención de Riesgos: El personal debe identificar y reportar
            cualquier riesgo potencial o condición insegura inmediatamente para
            prevenir accidentes o incidentes.
          </p>
        </div> */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Protección del Medio Ambiente y la Cultura Local
          </h2>
          <p className="parrafo fade-in">
            • Respeto a la Naturaleza y la Comunidad: Al ser un operador de
            turismo en la Amazonía, promovemos el respeto por el entorno natural
            y las comunidades locales. El personal debe asegurarse de que las
            actividades turísticas sean sostenibles y respetuosas con el medio
            ambiente y las tradiciones culturales.
          </p>
          <p className="parrafo fade-in">
            • Cuidado del Patrimonio Natural y Cultural: Nuestros empleados
            deben sensibilizar a los clientes sobre la importancia de conservar
            la biodiversidad y respetar las costumbres y prácticas de las
            comunidades indígenas.
          </p>
        </div>
        {/* <div className="parrafo fade-in">
          <h2 className="title fade-in">Comunicación Clara y Transparente</h2>
          <p className="parrafo fade-in">
            • Atención al Cliente: El personal debe ofrecer un servicio amable y
            de calidad, resolviendo dudas y proporcionando información clara
            sobre los servicios de FADA Tours. Las inquietudes de los clientes
            deben ser tratadas con rapidez y profesionalismo.
          </p>
          <p className="parrafo fade-in">
            • Confidencialidad: El personal debe proteger la información
            personal y financiera de los clientes y manejarla con discreción,
            respetando todas las leyes de protección de datos vigentes.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Trabajo en Equipo</h2>
          <p className="parrafo fade-in">
            • Colaboración: El personal debe promover un ambiente de trabajo
            positivo, apoyando a sus compañeros y contribuyendo al éxito general
            de la empresa. Fomentamos la cooperación y el respeto mutuo entre
            todos los miembros del equipo.
          </p>
          <p className="parrafo fade-in">
            • Resolución de Conflictos: Cualquier conflicto o desacuerdo en el
            lugar de trabajo debe ser resuelto de manera pacífica y profesional.
            FADA Tours tiene un procedimiento claro para la resolución de
            conflictos que todos los empleados deben seguir.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Mejora Continua</h2>
          <p className="parrafo fade-in">
            • Capacitación Constante: FADA Tours está comprometida con la
            capacitación y el desarrollo de su personal. Los empleados deben
            participar activamente en los programas de formación para mejorar
            sus habilidades y brindar un servicio de calidad superior.
          </p>
        </div> */}
      </div>

      <TitleSubtitle
        title="Política de Responsabilidad Social "
        subtitle="Responsabilidad Social"
        backgroundTitle="Responsabilidad"
        position="centro"
      />

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Compromiso FADA</h2>
          <p className="parrafo fade-in">
            En FADA Tours, estamos profundamente comprometidos con el desarrollo
            sostenible y la promoción de un turismo responsable que beneficia
            tanto a nuestros clientes como a las comunidades y entornos que
            visitamos. Nuestra Política de Responsabilidad Social guía nuestras
            acciones para crear un impacto positivo en la sociedad, respetando
            siempre las normativas locales, nacionales e internacionales.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Compromiso con las Comunidades Locales
          </h2>
          <p className="parrafo fade-in">
            • Fomento de la Economía Local: Apoyamos a las comunidades donde
            operamos al priorizar la contratación de guías y personal local, así
            como la promoción de productos y servicios de emprendedores locales.
          </p>
          <p className="parrafo fade-in">
            • Cuidado del Patrimonio Cultural: Respetamos y promovemos las
            tradiciones, costumbres y la cultura de las comunidades indígenas y
            locales. Nos aseguramos de que nuestros clientes valoren y respeten
            estas culturas durante sus visitas.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Protección del Medio Ambiente</h2>
          <p className="parrafo fade-in">
            • Turismo Sostenible: Promovemos prácticas de turismo que protejan y
            conserven los recursos naturales de la Amazonía. Nuestro objetivo es
            minimizar el impacto ambiental de nuestras actividades, manteniendo
            un equilibrio entre el desarrollo turístico y la preservación de la
            biodiversidad.
          </p>
          <p className="parrafo fade-in">
            • Reducción de la Huella Ecológica: Fomentamos la reducción del uso
            de plásticos y promovemos el reciclaje en nuestras operaciones.
            Además, alejamos a nuestros clientes y empleados a reducir el
            consumo de recursos naturales como agua y energía durante los tours.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Apoyo a la Educación y Concienciación
          </h2>
          <p className="parrafo fade-in">
            • Sensibilización Ambiental y Cultural: Nos comprometemos a educar
            tanto a nuestros clientes como a las comunidades locales sobre la
            importancia de conservar el medio ambiente y respetar las culturas
            locales. Organizamos actividades y campañas educativas para fomentar
            el respeto y el cuidado de la naturaleza y la cultura amazónica.
          </p>
          <p className="parrafo fade-in">
            • Capacitación Continua: proporcionó formación regular a nuestro
            equipo y guías locales en temas de responsabilidad social,
            sostenibilidad y conservación del medio ambiente.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Cumplimiento de Normativas y Buenas Prácticas
          </h2>
          <p className="parrafo fade-in">
            • Normativas Nacionales e Internacionales: En todas nuestras
            operaciones, cumplimos con las leyes de turismo responsable, medio
            ambiente y derechos laborales, tanto a nivel nacional (como las
            leyes peruanas de protección ambiental y trabajo justo) como
            internacional, siguiendo principios y acuerdos globales de
            sostenibilidad. , como los de la Organización Mundial del Turismo
            (OMT) y la Agenda 2030 de la ONU para el Desarrollo Sostenible.
          </p>
          <p className="parrafo fade-in">
            • Transparencia y Ética: Actuamos con total transparencia y ética en
            todas nuestras operaciones. Fomentamos una relación de confianza con
            las comunidades locales y nuestros clientes, basándonos en la
            honestidad y el respeto mutuo.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Participación en el Desarrollo Comunitario
          </h2>
          <p className="parrafo fade-in">
            • Proyectos de Desarrollo Social: FADA Tours participa en proyectos
            que mejoran la calidad de vida de las comunidades locales, apoyando
            iniciativas educativas, de salud y de infraestructura básica.
          </p>
          <p className="parrafo fade-in">
            • Involucramiento Comunitario: Trabajamos en estrecha colaboración
            con las comunidades para garantizar que nuestras actividades
            turísticas beneficien a todos los involucrados y generen un impacto
            positivo a largo plazo.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Responsabilidad con Nuestros Empleados
          </h2>
          <p className="parrafo fade-in">
            • Condiciones de Trabajo Dignas: Nos aseguramos de que todo nuestro
            equipo disfrute de un ambiente de trabajo seguro y justo, cumpliendo
            con los estándares laborales internacionales y nacionales. Ofrecemos
            salarios justos y condiciones de empleo dignas, fomentando el
            desarrollo personal y profesional de cada miembro del equipo.
          </p>
          <p className="parrafo fade-in">
            • Diversidad e Inclusión: FADA Tours promueve la igualdad de
            oportunidades y la inclusión de personas de diferentes orígenes
            étnicos, culturas, géneros y habilidades, creando un ambiente
            laboral respetuoso y diverso.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Monitoreo y Mejora Continua</h2>
          <p className="parrafo fade-in">
            • Evaluación del Impacto Social y Ambiental: Realizamos un monitoreo
            continuo de nuestras actividades para asegurarnos de que cumplimos
            con nuestros objetivos de responsabilidad social. Además,
            implementamos mejoras de manera constante para reducir cualquier
            impacto negativo y maximizar los beneficios para las comunidades y
            el medio ambiente.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Comunicación y Transparencia</h2>
          <p className="parrafo fade-in">
            • Relación con los Clientes: Mantenemos una comunicación abierta y
            honesta con nuestros clientes, informándolos sobre nuestras
            políticas de sostenibilidad y responsabilidad social, y alentándolos
            a participar en prácticas responsables durante los tours.
          </p>
          <p className="parrafo fade-in">
            • Informe de Sostenibilidad: Publicamos informes regulares sobre
            nuestros y logros en responsabilidad social, permitiendo a todas las
            partes interesadas conocer nuestras acciones y compromisos.
          </p>
        </div>
      </div>

      <TitleSubtitle
        title="Política de Diversidad e Inclusión"
        subtitle="Políticas de Inclusión"
        backgroundTitle="Diversidad"
        position="centro"
      />

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Diversidad e Inclusión en FADA</h2>
          <p className="parrafo fade-in">
            En FADA Tours, valoramos la diversidad y estamos comprometidos en
            crear un ambiente de trabajo inclusivo y respetuoso para todas las
            personas, sin importar sus diferencias. Creemos que un equipo
            diverso e inclusivo enriquece nuestra cultura empresarial, mejora
            nuestros servicios y fortalece nuestra relación con clientes y
            comunidades. Esta política establece nuestro compromiso con la
            igualdad de oportunidades, el respeto a la diversidad y la inclusión
            en todas nuestras actividades.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Igualdad de oportunidades</h2>
          <p className="parrafo fade-in">
            • Contratación Inclusiva: FADA Tours garantiza que todos los
            procesos de selección y contratación se basen únicamente en la
            capacidad, habilidades y méritos de los candidatos, sin
            discriminación por motivos de raza, género, edad, religión,
            orientación sexual, identidad de género, discapacidad o cualquier
            otro factor protegido por la ley.
          </p>
          <p className="parrafo fade-in">
            • Promoción Interna Equitativa: Nos aseguramos de que todos nuestros
            empleados tengan acceso a oportunidades de crecimiento profesional,
            basadas en su desempeño y potencial, promoviendo el desarrollo de
            cada persona de manera justa y equitativa.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Respeto a la diversidad</h2>
          <p className="parrafo fade-in">
            • Ambiente de Trabajo Inclusivo: Fomentamos un entorno laboral donde
            se respete y valore la diversidad de pensamientos, experiencias y
            perspectivas. Cada miembro de nuestro equipo tiene el derecho de
            sentirse aceptado, valorado y respetado, independientemente de su
            origen o características personales.
          </p>
          <p className="parrafo fade-in">
            • Celebración de la Diversidad Cultural: En FADA Tours, promovemos
            el intercambio cultural y el respeto por las diferentes tradiciones
            y costumbres de las comunidades que visitamos. Esto nos permite
            crear experiencias turísticas enriquecedoras y respetuosas tanto
            para nuestros empleados como para nuestros clientes.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">No Discriminación y No Acoso</h2>
          <p className="parrafo">
            • Cero Tolerancia a la Discriminación: Nos comprometemos a
            garantizar un entorno libre de discriminación. Cualquier
            comportamiento que promueva el trato desigual o perjudicial hacia
            una persona por motivos de su identidad personal está estrictamente
            prohibido.
          </p>
          <p className="parrafo fade-in">
            • Cero Tolerancia al Acoso: En FADA Tours, no se tolera ningún tipo
            de acoso, ya sea físico, verbal o emocional, hacia empleados,
            clientes o proveedores. Todos tienen derecho a trabajar en un
            entorno seguro y respetuoso.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Inclusión de Personas con Discapacidad
          </h2>
          <p className="parrafo fade-in">
            • Acceso Igualitario: Nos esforzamos por asegurar que nuestras
            instalaciones y servicios sean accesibles para personas con
            discapacidades. FADA Tours toma todas las medidas necesarias para
            proporcionar los ajustes razonables que permitan la inclusión plena
            de personas con discapacidades, tanto en el entorno laboral como en
            las experiencias turísticas que ofrecemos.
          </p>
          <p className="parrafo fade-in">
            • Capacitación y Conciencia: Nuestro equipo formación regular para
            promover la inclusión de personas con discapacidades, asegurando que
            todos los empleados, clientes y colaboradores se sientan apoyados y
            respetados.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Cumplimiento de Normativas Nacionales e Internacionales
          </h2>
          <p className="parrafo fade-in">
            • Normativas Legales: Cumplimos con todas las leyes y normativas
            nacionales e internacionales relacionadas con la igualdad de
            oportunidades y la no discriminación, incluidas las regulaciones
            establecidas en la Constitución del Perú, la Ley N° 26772 sobre
            Igualdad de Oportunidades y la Convención sobre los Derechos de las
            Personas con Discapacidad de las Naciones Unidas.
          </p>
          <p className="parrafo fade-in">
            • Compromisos Globales: Adoptamos los principios de diversidad e
            inclusión establecidos por organismos internacionales como la
            Organización Internacional del Trabajo (OIT) y la Organización
            Mundial del Turismo (OMT), promoviendo prácticas justas y
            equitativas en todo lo que hacemos.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Formación y Sensibilización</h2>
          <p className="parrafo fade-in">
            • Capacitación Continua: En FADA Tours, ofrecemos programas de
            capacitación regulares a todo nuestro equipo para promover una
            cultura de respeto, equidad e inclusión. Estos programas abordan
            temas como la igualdad de género, la lucha contra la discriminación
            y la inclusión de personas de diferentes orígenes y capacidades.
          </p>
          <p className="parrafo fade-in">
            • Fomento de la Conciencia: Nos esforzamos por aumentar la
            conciencia sobre la importancia de la diversidad e inclusión, tanto
            dentro de nuestra empresa como entre nuestros clientes y
            proveedores. Creemos que el respeto por la diversidad es clave para
            el éxito y la sostenibilidad de nuestras actividades.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Promoción de la Inclusión en el Turismo
          </h2>
          <p className="parrafo fade-in">
            • Experiencias Turísticas Inclusivas: Diseñamos nuestras
            experiencias turísticas para ser accesibles y respetuosas con las
            necesidades de personas de diversos orígenes y capacidades.
            Promovemos el turismo inclusivo que beneficia a todos,
            independientemente de sus diferencias, asegurando que nuestras
            actividades sean seguras y cómodas para todos los participantes.
          </p>
          <p className="parrafo fade-in">
            • Integración de la Diversidad en los Servicios: A través de
            nuestras experiencias y tours, fomentamos el respeto por la
            diversidad cultural y natural, destacando la riqueza de la Amazonía
            y las comunidades locales de Tarapoto.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Monitoreo y evaluación</h2>
          <p className="parrafo fade-in">
            • Revisión Periódica: Evaluamos regularmente nuestras políticas y
            prácticas para garantizar que cumplan con los más altos estándares
            de diversidad e inclusión. Realizamos ajustes cuando sea necesario
            para mejorar nuestro enfoque y adaptarnos a nuevas normativas o
            necesidades.
          </p>
          <p className="parrafo fade-in">
            • Participación Activa: Invitamos a nuestros empleados, clientes y
            socios a proporcionar retroalimentación sobre cómo podemos seguir
            mejorando nuestras políticas de diversidad e inclusión.
          </p>
        </div>
      </div>

      <TitleSubtitle
        title="Política de Privacidad de Datos"
        subtitle="Privacidad de Datos"
        backgroundTitle="Privacidad"
        position="centro"
      />

      <div className="container-politics">
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Privacidad de FADA</h2>
          <p className="parrafo fade-in">
            En FADA Tours, la privacidad de nuestros clientes, empleados y
            socios es de suma importancia. Nos comprometemos a proteger los
            datos personales que recopilamos y garantizamos que sean utilizados
            de manera segura, ética y conforme a la ley. Esta política describe
            cómo manejamos, protegemos y utilizamos la información personal que
            recopilamos, en conformidad con las leyes nacionales e
            internacionales de protección de datos, como la Ley N° 29733 - Ley
            de Protección de Datos Personales del Perú y el Reglamento General
            de Protección de Datos (GDPR) de la Unión Europea, en los casos
            aplicables.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Información que Recopilamos</h2>
          <ul className="subtitulos">
            En FADA Tours podemos recopilar los tipos de información personal:
            <li>
              • Datos personales básicos: Nombre, dirección, correo electrónico,
              número de teléfono y otros datos de contacto.
            </li>
            <li>
              • Información de pagos: Detalles de tarjetas de crédito o débito,
              cuentas bancarias y otros métodos de pago, que se utilizan
              exclusivamente para procesar pagos por nuestros servicios.
            </li>
            <li>
              • Preferencias de viaje: Información relacionada con sus intereses
              turísticos, destinos preferidos, hábitos de viaje y cualquier
              requisito especial (como restricciones alimenticias,
              accesibilidad, etc.).
            </li>
            <li>
              • Información relacionada con el uso de nuestro sitio web:
              Direcciones IP, datos de navegación, ubicación geográfica y
              cookies para mejorar la experiencia del usuario y personalizar
              nuestros servicios.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Uso de la información</h2>
          <ul className="subtitulos">
            Utilizamos la información personal que recopilamos para los
            siguientes propósitos:
            <li>
              • Procesar reservas y pagos: La información proporcionada se
              utiliza para gestionar reservas, confirmar servicios y procesar
              pagos de manera segura.
            </li>
            <li>
              • Mejorar nuestros servicios: Utilizamos datos de navegación y
              preferencias de viaje para personalizar la experiencia de nuestros
              clientes y optimizar nuestras ofertas turísticas.
            </li>
            <li>
              • Comunicación con los clientes: Utilizamos su información de
              contacto para enviarle información relevante sobre su reserva,
              actualizaciones importantes, promociones y encuestas de
              satisfacción.
            </li>
            <li>
              • Cumplimiento legal: En caso de ser necesario, utilizamos los
              datos personales para cumplir con obligaciones legales o
              normativas locales e internacionales.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Protección de la Información</h2>
          <ul className="subtitulos">
            En FADA Tours, tomamos todas las medidas necesarias para proteger
            los datos personales de nuestros clientes, empleados y socios.
            Implementamos medidas de seguridad, organizativas y legales para
            prevenir el acceso no autorizado, la divulgación, alteraciones o
            pérdida de datos personales. Estas medidas incluyen:
            {/* <li>
              • Cifrado de datos: La información sensible, como datos de pago,
              es cifrada durante las transacciones para garantizar su
              protección.
            </li> */}
            <li>
              • Acceso restringido: Solo el personal autorizado tiene acceso a
              los datos personales, y dicho acceso se limita a lo estrictamente
              necesario para realizar sus funciones.
            </li>
            <li>
              • Revisión continua: Revisamos y actualizamos nuestras políticas y
              procedimientos de seguridad de manera regular para garantizar la
              protección constante de los datos.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Compartir la Información</h2>
          <ul className="subtitulos">
            FADA Tours no vende, alquila ni comparte los datos personales de sus
            clientes con terceros, excepto en los siguientes casos:
            <li>
              • Proveedores de servicios: Compartimos información con terceros
              que nos ayudan a brindar nuestros servicios, como procesadores de
              pagos, operadores turísticos o empresas de transporte. Estas
              terceras partes están obligadas a proteger su información y solo
              utilizarla para las multas específicas acordadas.
            </li>
            <li>
              • Cumplimiento legal: Podemos compartir datos personales cuando
              sea necesario para cumplir con leyes, regulaciones o
              requerimientos judiciales.
            </li>
            <li>
              • Consentimiento explícito: En casos donde sea necesario compartir
              información por otros motivos, solicitaremos su consentimiento
              explícito antes de proceder.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Derechos de los Usuarios</h2>
          <ul className="subtitulos">
            Conforme a la Ley de Protección de Datos Personales del Perú y las
            normativas internacionales aplicables, los usuarios tienen los
            siguientes derechos sobre su información personal:
            {/* <li>
              • Acceso a los datos: Usted tiene el derecho de solicitar una
              copia de los datos personales que hemos recopilado sobre usted.
            </li> */}
            <li>
              • Corrección de los datos: Si alguno de sus datos personales es
              incorrecto o está desactualizado, puede solicitar que los
              corrijamos o actualicemos.
            </li>
            <li>
              • Eliminación de los datos: Usted puede solicitar la eliminación
              de sus datos personales en cualquier momento, siempre y cuando no
              exista una obligación legal de retener dicha información.
            </li>
            <li>
              • Retiro del consentimiento: Si en algún momento ha otorgado su
              consentimiento para el uso de sus datos, puede retirarlo
              contactándonos a través de los canales indicados.
            </li>
            <li>
              • Oposición al procesamiento: Tiene el derecho de oponerse al uso
              de sus datos personales para determinadas multas, como el
              marketing directo.
            </li>
          </ul>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Retención de datos</h2>
          <p className="parrafo fade-in">
            Conservamos los datos personales durante el tiempo que sea necesario
            para cumplir con los propósitos descritos en esta política, o según
            lo exija la ley. Una vez que ya no sea necesario retener la
            información, la eliminaremos de manera segura.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Uso de Cookies y Tecnologías Similares
          </h2>
          <p className="parrafo fade-in">
            Nuestro sitio web utiliza cookies y tecnologías similares para
            mejorar la experiencia de navegación, analizar el tráfico y
            personalizar el contenido. Los usuarios pueden ajustar la
            configuración de su navegador para rechazar las cookies, aunque esto
            puede afectar el funcionamiento de algunas partes del sitio web.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Actualizaciones de la Política de Privacidad
          </h2>
          <p className="parrafo fade-in">
            FADA Tours puede actualizar esta política de privacidad
            ocasionalmente para reflejar cambios en nuestras prácticas o en la
            legislación aplicable. Cualquier actualización será notificada en
            nuestra página web y entrará en vigencia una vez publicada.
          </p>
        </div>
        <div className="parrafo fade-in">
          <h2 className="title fade-in">
            Contacto
          </h2>
          <p className="parrafo fade-in">
            Si tiene alguna duda o inquietud sobre nuestra Política de
            Privacidad o si desea ejercer alguno de sus derechos sobre sus datos
            personales, puede contactarnos a través de los siguientes medios:
          </p>
          <p className="parrafo fade-in">
            • Correo electrónico: Privacidad @fadatours .com
          </p>
          <p className="parrafo fade-in">• Teléfono: +51 941 950 860</p>
        </div>
      </div>

      <VerticalSeparator altura="10" />
    </div>
  );
};

export default Politicas;
