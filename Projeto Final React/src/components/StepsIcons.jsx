import "./Stepicons.css";

export const StepIcons = () => {
  return (
    
      <div className="steps">
        <div className="step-icons step">
          <div className="step-1">
            <i class="bi bi-1-circle step-icon active"></i>
            <p>Dados Pessoais</p>
          </div>

          <div className="step-2 step">
            <i class="bi bi-2-circle step-icon " ></i>
            <p>Dados de acesso</p>
          </div>

          <div className="step-3 step">
            <i class="bi bi-3-circle"></i>
            <p>Endereço</p>
          </div>
        </div>
      </div>
    
  );
};
