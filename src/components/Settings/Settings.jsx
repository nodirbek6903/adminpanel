import "./Settings.css"
const Settings = () => {
  return (
    <div className="settings-container">
        <div className="settings-card">
            <form action="" className="settings-form">
                <h2>Kategoriya yaratish</h2>
                <div className="form-items">
                    <div className="form-item">
                        <label htmlFor="">Kategoriya nomi - EN</label>
                        <input type="text" placeholder="Kategoriya nomi - EN" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Kategoriya nomi - RU</label>
                        <input type="text" placeholder="Kategoriya nomi - RU" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Upload Image</label>
                        <input type="file" required />
                    </div>
                </div>
                <div className="form-button">
                    <button type="submit">Yaratish</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Settings